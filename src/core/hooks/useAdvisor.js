import { useState } from 'react';
import { getFinancialPlan } from '../services/geminiService';

export const useAdvisor = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [plan, setPlan] = useState(null);

  const generatePlan = async ({ salary, goalName, goalCost, transactions }) => {
    setLoading(true);
    setError(null);
    setPlan(null);

    try {
      const result = await getFinancialPlan({ salary, goalName, goalCost, transactions });
      setPlan(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setPlan(null);
    setError(null);
  };

  return { plan, loading, error, generatePlan, reset };
};
