import { createContext, useState, useEffect, useCallback } from 'react';

export const TransactionsContext = createContext();

const STORAGE_KEY = 'transactions';

const calculateTotals = (list) => {
  const income = list
    .filter((t) => !t.expense)
    .reduce((acc, t) => acc + Number(t.amount), 0);
  return { income, total: income  };
};

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const [totals, setTotals] = useState({ income: 0, expense: 0, total: 0 });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
    setTotals(calculateTotals(transactions));
  }, [transactions]);

  const addTransaction = useCallback((transaction) => {
    setTransactions((prev) => [
      ...prev,
      {
        ...transaction,
        id: Date.now(),
        amount: Number(transaction.amount),
        createdAt: new Date().toISOString(),
      },
    ]);
  }, []);

  const removeTransaction = useCallback((id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, totals, addTransaction, removeTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
