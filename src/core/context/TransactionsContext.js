import { createContext, useState, useEffect, useCallback } from 'react';
import {
  fetchTransactions,
  addTransaction as apiAdd,
  deleteTransaction as apiDelete,
} from '../services/apiService';

export const TransactionsContext = createContext();

const calculateTotals = (list) => {
  const income = list
    .filter((t) => !t.expense)
    .reduce((acc, t) => acc + Number(t.amount), 0);
  const expense = list
    .filter((t) => t.expense)
    .reduce((acc, t) => acc + Number(t.amount), 0);
  return { income, expense, total: income - expense };
};

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totals, setTotals] = useState({ income: 0, expense: 0, total: 0 });

  useEffect(() => {
    fetchTransactions()
      .then(setTransactions)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setTotals(calculateTotals(transactions));
  }, [transactions]);

  const addTransaction = useCallback(async (transaction) => {
    const created = await apiAdd(transaction);
    setTransactions((prev) => [...prev, created]);
    return created;
  }, []);

  const removeTransaction = useCallback(async (id) => {
    await apiDelete(id);
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, totals, loading, error, addTransaction, removeTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
