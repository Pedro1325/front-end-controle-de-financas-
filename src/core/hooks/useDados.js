import { useState, useCallback } from 'react';

const STORAGE_KEY = 'user_data';

const getInitialData = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored
    ? JSON.parse(stored)
    : { name: '', salary: '', goalName: '', goalCost: '' };
};

export const useDados = () => {
  const [data, setData] = useState(getInitialData);

  const updateData = useCallback((newData) => {
    setData((prev) => {
      const updated = { ...prev, ...newData };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  return { data, updateData };
};
