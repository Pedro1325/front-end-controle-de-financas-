# 🗂️ Projeto Controle Financeiro — Bloco de Notas

## 🚩 Fase 1 — Consertar arquivos quebrados

### Tarefa 1.1 — InvestimentContext.js
**Arquivo:** `src/core/context/InvestimentContext.js`
**Problemas:**
- `import { children, ... }` — `children` não é exportado pelo React, é prop
- Nome da função do provider está com letra minúscula (`investmentProvider`)
- O provider não retorna JSX (falta o `InvestmentContext.Provider`)
- `const total` solto no meio do código sem valor
- Usa a mesma `STORAGE_KEY` do `TransactionsContext` (conflito)
- Não exporta o provider
- O propósito não está claro: é para investimentos ou é duplicata?

**O que fazer:** Decidir o propósito desse arquivo e reescrever completo.

### Tarefa 1.2 — useDados.js
**Arquivo:** `src/core/hooks/useDados.js`
**Problemas:**
- Arquivo vazio (só declaração do hook, sem retorno)
- Nome genérico "useDados" — qual o propósito?

**O que fazer:** Definir propósito e implementar.

### Tarefa 1.3 — MyAccount/index.js
**Arquivo:** `src/pages/MyAccount/index.js`
**Problemas:**
- Importa `useDados()` que não existe
- Só mostra "Estou desenvolvendo a pagina"
- É placeholder sem funcionalidade real

**O que fazer:** Implementar página de conta do usuário.

---

## 🚩 Fase 2 — Backend .NET (criar do zero)

### Tarefa 2.1 — Criar projeto Financeiro.API
### Tarefa 2.2 — Criar model Transaction
### Tarefa 2.3 — Configurar EF Core + SQLite
### Tarefa 2.4 — Criar endpoints CRUD
### Tarefa 2.5 — Configurar CORS

---

## 🚩 Fase 3 — Conectar frontend com backend

### Tarefa 3.1 — Criar service de API no frontend
### Tarefa 3.2 — Substituir localStorage por fetch()
### Tarefa 3.3 — Tratar erros e loading states

---

## 🚩 Fase 4 — Autenticação JWT

### Tarefa 4.1 — Criar endpoint de login no backend
### Tarefa 4.2 — Criar tela de login no frontend
### Tarefa 4.3 — Proteger rotas privadas

---

## 📌 Próximos passos (futuro)
- Paginação e filtros
- Docker Compose
- Testes
