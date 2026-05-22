import TransactionRow from '../TransactionRow';
import * as C from './styles';

const TransactionTable = ({ items, onDelete }) => {
  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th>Descrição</C.Th>
          <C.Th>Valor</C.Th>
          <C.Th $alignCenter>Tipo</C.Th>
          <C.Th $alignCenter></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {items.length === 0 ? (
          <C.Tr>
            <C.Td colSpan={4}>
              <C.EmptyMessage>
                Nenhuma transação ainda. Adicione uma acima!
              </C.EmptyMessage>
            </C.Td>
          </C.Tr>
        ) : (
          items.map((item) => (
            <TransactionRow key={item.id} item={item} onDelete={onDelete} />
          ))
        )}
      </C.Tbody>
    </C.Table>
  );
};

export default TransactionTable;
