const API_KEY = process.env.API_CONTROLE_FINANCEIRO;
const MODEL = 'gemini-2.0-flash';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

const buildPrompt = ({ salary, goalName, goalCost, transactions }) => {
  const incomeList = transactions
    .filter((t) => !t.expense)
    .map((t) => `  - ${t.desc}: R$ ${Number(t.amount).toFixed(2)}`)
    .join('\n');

  const expenseList = transactions
    .filter((t) => t.expense)
    .map((t) => `  - ${t.desc}: R$ ${Number(t.amount).toFixed(2)}`)
    .join('\n');

  const totalIncome = transactions
    .filter((t) => !t.expense)
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const totalExpense = transactions
    .filter((t) => t.expense)
    .reduce((acc, t) => acc + Number(t.amount), 0);

  return `
Você é um consultor financeiro especializado em educação financeira.

## Dados do usuário

**Salário mensal:** R$ ${Number(salary).toFixed(2)}

**Objetivo:** Comprar "${goalName}" — custo estimado: R$ ${Number(goalCost).toFixed(2)}

**Receitas cadastradas:**
${incomeList || '  (nenhuma receita cadastrada)'}

**Despesas cadastradas:**
${expenseList || '  (nenhuma despesa cadastrada)'}

**Total de receitas:** R$ ${totalIncome.toFixed(2)}
**Total de despesas:** R$ ${totalExpense.toFixed(2)}

## Sua tarefa

Com base nos dados acima, crie um PLANO FINANCEIRO PERSONALIZADO em português brasileiro. Seja direto, prático e motivador.

### Estrutura obrigatória da resposta:

1. **Diagnóstico atual** — analise a saúde financeira do usuário (gasta mais do que ganha? tem margem para poupar?)

2. **Quanto tempo para atingir o objetivo** — calcule quantos meses levará se poupar X% do salário

3. **Plano de ação** — sugestões práticas de cortes de gastos, aumento de receita e estratégias de economia

4. **Resumo mensal recomendado** — quanto poupar por mês, quanto gastar, quanto investir

5. **Dica extra** — uma dica motivacional ou estratégia inteligente

Use linguagem clara e exemplos reais. Seja honesto sobre prazos realistas.
`.trim();
};

export const getFinancialPlan = async ({ salary, goalName, goalCost, transactions }) => {
  if (!API_KEY) {
    throw new Error('Chave da API Gemini não configurada. Crie um arquivo .env.local com REACT_APP_GEMINI_API_KEY=sua_chave');
  }

  const prompt = buildPrompt({ salary, goalName, goalCost, transactions });

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro na API Gemini: ${response.status} — ${errorText}`);
  }

  const data = await response.json();

  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error('Resposta vazia da API Gemini');
  }

  return text;
};
