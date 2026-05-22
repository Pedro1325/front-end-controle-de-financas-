import { children, createContext, useState } from "react"

export const InvestmentContext = createContext()

const STORAGE_KEY = 'transactions';
const totalInvestment = (list) => {
    const investedIncome = list
    .filter((t) => !t.expense)
    .reduce((acc, t) => acc + Number(t.amount), 0)
  const prejudice = list 
  .filter((t) => t.expense)
  .reduce((acc, t) => acc + Number(t.amount), 0)
  return {investedIncome, prejudice, total: investedIncome - prejudice}
}

const investmentProvider = ({ children}) => {
    const [transition, setTransactions] = useState (() => {
        const stored = localStorage.getItem(STORAGE_KEY)
        return stored ? JSON.parse(stored) : []
    })

    const total

}
