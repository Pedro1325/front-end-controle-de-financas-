# Plano de Implementação — Backend .NET + SQLite

## 1. Estrutura do Backend (.NET Web API)

Criar projeto separado: `Financeiro.API`

- ASP.NET Core Web API (minimal API ou controllers)
- Entity Framework Core com provider SQLite
- **Pasta Models**: `Transaction` (Id, Description, Amount, IsExpense, CreatedAt)
- **Pasta Endpoints**: CRUD básico (GET, POST, DELETE)

## 2. API REST

| Método | Rota | Função |
|--------|------|--------|
| GET | `/api/transactions` | Lista todas |
| POST | `/api/transactions` | Adiciona |
| DELETE | `/api/transactions/{id}` | Remove |

## 3. Frontend — trocar `localStorage` por chamadas HTTP

No `App.js` e `Grid/index.js`, substituir `localStorage.getItem/setItem` por `fetch()` para o backend.

## 4. Pontos de melhoria importantes

- Usar `Guid` como ID em vez de `Math.random() * 1000`
- Adicionar `CreatedAt` nos registros
- Separar camadas (Repository pattern ou Services)
- Usar DTOs (não expor a entidade diretamente)
- Tratar erros com status codes (400, 404, 500)
- Configurar CORS para `http://localhost:3000`
- Migrações do EF Core para criar o banco SQLite

## 5. Bônus (deixar o projeto foda)

- Autenticação JWT para múltiplos usuários
- Paginação e filtros por mês/ano
- Docker Compose com backend + frontend
- Testes (xUnit no backend, Testing Library no frontend)
