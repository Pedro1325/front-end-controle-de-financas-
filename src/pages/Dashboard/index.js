import ResumeCard from '../../components/ui/ResumeCard';
import TransactionForm from '../../components/ui/TransactionForm';
import TransactionTable from '../../components/ui/TransactionTable';
import { useTransactions } from '../../core/hooks/useTransactions';
import { formatCurrency } from '../../core/utils/formatters';
import { FiArrowUpCircle, FiArrowDownCircle, FiDollarSign } from 'react-icons/fi';
import * as C from './styles';

const Dashboard = () => {
  const { transactions, totals, addTransaction, removeTransaction } =
    useTransactions();

  return (
    <C.Container>
      <C.ResumeRow>
        <ResumeCard
          title="Entradas"
          value={formatCurrency(totals.income)}
          icon={FiArrowUpCircle}
          color="#22c55e"
        />
        <ResumeCard
          title="Saídas"
          value={formatCurrency(totals.expense)}
          icon={FiArrowDownCircle}
          color="#ef4444"
        />
        <ResumeCard
          title="Saldo"
          value={formatCurrency(totals.total)}
          icon={FiDollarSign}
          color={totals.total >= 0 ? '#22c55e' : '#ef4444'}
        />
      </C.ResumeRow>
      <TransactionForm onSubmit={addTransaction} />
      <TransactionTable items={transactions} onDelete={removeTransaction} />
    </C.Container>
  );
};

export default Dashboard;
