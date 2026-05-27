const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5221';

const toBackend = (t) => ({
  description: t.desc,
  amount: Number(t.amount),
  isExpense: t.expense,
});

const toFrontend = (t) => ({
  id: t.id,
  desc: t.description,
  amount: Number(t.amount),
  expense: t.isExpense,
  createdAt: t.createdAt,
});

export const fetchTransactions = async () => {
  const res = await fetch(`${BASE_URL}/api/transactions`);
  if (!res.ok) throw new Error(`Erro ao carregar: ${res.status}`);
  const data = await res.json();
  return data.map(toFrontend);
};

export const addTransaction = async (transaction) => {
  const res = await fetch(`${BASE_URL}/api/transactions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(toBackend(transaction)),
  });
  if (!res.ok) throw new Error(`Erro ao adicionar: ${res.status}`);
  const data = await res.json();
  return toFrontend(data);
};

export const deleteTransaction = async (id) => {
  const res = await fetch(`${BASE_URL}/api/transactions/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error(`Erro ao remover: ${res.status}`);
};
