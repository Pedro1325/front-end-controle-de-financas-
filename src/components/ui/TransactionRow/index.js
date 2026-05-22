import { FiArrowUpCircle, FiArrowDownCircle, FiTrash2 } from 'react-icons/fi';
import { formatCurrency } from '../../../core/utils/formatters';
import * as C from './styles';

const TransactionRow = ({ item, onDelete }) => {
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{formatCurrency(item.amount)}</C.Td>
      <C.Td $alignCenter>
        {item.expense ? (
          <FiArrowDownCircle color="#ef4444" size={18} />
        ) : (
          <FiArrowUpCircle color="#22c55e" size={18} />
        )}
      </C.Td>
      <C.Td $alignCenter>
        <FiTrash2 onClick={() => onDelete(item.id)} />
      </C.Td>
    </C.Tr>
  );
};

export default TransactionRow;
