import TransactionForm from '../../components/ui/TransactionForm';
import TransactionTable from '../../components/ui/TransactionTable';
import { useTransactions } from '../../core/hooks/useTransactions';
import * as C from './styles';
const Transactions = () => {
  const { transactions, addTransaction, removeTransaction } =
    useTransactions();
  return (
    <C.Container>
      <TransactionForm onSubmit={addTransaction} />
      <TransactionTable items={transactions} onDelete={removeTransaction} />
    </C.Container>
  );
};
export default Transactions;