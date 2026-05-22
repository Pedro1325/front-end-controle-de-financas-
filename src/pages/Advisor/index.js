import { useState } from 'react';
import { useTransactions } from '../../core/hooks/useTransactions';
import { useAdvisor } from '../../core/hooks/useAdvisor';
import ChartModal from '../../components/ui/ChartModal';
import * as C from './styles';

const Advisor = () => {
  const { transactions } = useTransactions();
  const { plan, loading, error, generatePlan, reset } = useAdvisor();

  const [salary, setSalary] = useState('');
  const [goalName, setGoalName] = useState('');
  const [goalCost, setGoalCost] = useState('');
  const [chartOpen, setChartOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!salary || !goalName || !goalCost) {
      alert('Preencha todos os campos!');
      return;
    }

    if (Number(salary) <= 0 || Number(goalCost) <= 0) {
      alert('Salário e custo do objetivo devem ser valores positivos!');
      return;
    }

    generatePlan({
      salary: Number(salary),
      goalName,
      goalCost: Number(goalCost),
      transactions,
    });
  };

  const formatPlan = (text) => {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br />');
  };

  if (plan) {
    return (
      <C.Container>
        <C.Card>
          <C.Title>Seu Plano Financeiro</C.Title>
          <C.ResultCard
            dangerouslySetInnerHTML={{ __html: formatPlan(plan) }}
          />
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <C.ButtonSecondary onClick={reset}>
              Novo planejamento
            </C.ButtonSecondary>
          </div>
        </C.Card>
      </C.Container>
    );
  }

  return (
    <C.Container>
      <C.Card>
        <C.Title>Consultor Financeiro com IA</C.Title>
        <C.InfoText style={{ textAlign: 'left', marginBottom: 24 }}>
          Informe seu salário e o que deseja conquistar. A IA vai analisar
          suas receitas e despesas atuais e criar um plano personalizado
          para você atingir seu objetivo.
        </C.InfoText>

        {error && <C.ErrorBox>{error}</C.ErrorBox>}

        <form onSubmit={handleSubmit}>
          <C.FormRow>
            <C.InputGroup>
              <C.Label>Salário mensal (R$)</C.Label>
              <C.Input
                type="number"
                step="0.01"
                min="0"
                placeholder="5000,00"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </C.InputGroup>
            <C.InputGroup>
              <C.Label>O que Deseja Comprar?</C.Label>
              <C.Input
                type="text"
                placeholder="Ex: PlayStation, Carro, Apartamento..."
                value={goalName}
                onChange={(e) => setGoalName(e.target.value)}
              />
            </C.InputGroup>
            <C.InputGroup>
              <C.Label>Custo estimado (R$)</C.Label>
              <C.Input
                type="number"
                step="0.01"
                min="0"
                placeholder="3500,00"
                value={goalCost}
                onChange={(e) => setGoalCost(e.target.value)}
              />
            </C.InputGroup>
          </C.FormRow>

          <C.ActionsRow>
            <C.Button type="submit" disabled={loading}>
              {loading ? 'Gerando plano...' : 'Gerar plano financeiro'}
            </C.Button>
            <C.ButtonSecondary type="button" onClick={() => setChartOpen(true)}>
              Gerar gráfico
            </C.ButtonSecondary>
          </C.ActionsRow>
        </form>

        {loading && (
          <C.LoadingContainer>
            <C.Spinner />
            <span>A IA está analisando suas finanças...</span>
          </C.LoadingContainer>
        )}
      </C.Card>

      {chartOpen && (
        <ChartModal
          transactions={transactions}
          onClose={() => setChartOpen(false)}
        />
      )}
    </C.Container>
  );
};

export default Advisor;
