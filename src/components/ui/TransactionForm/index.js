import { useState } from 'react';
import * as C from './styles';

const TransactionForm = ({ onSubmit }) => {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [isExpense, setIsExpense] = useState(false);

  const handleSave = () => {
    if (!desc || !amount) {
      alert('Informe a descrição e o valor!');
      return;
    }
    if (Number(amount) <= 0) {
      alert('O valor tem que ser positivo!');
      return;
    }

    onSubmit({
      desc,
      amount: Number(amount),
      expense: isExpense,
    });

    setDesc('');
    setAmount('');
    setIsExpense(false);
  };

  return (
    <C.Container>
      <C.InputGroup>
        <C.Label>Descrição</C.Label>
        <C.Input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Ex: Salário, conta de luz..."
        />
      </C.InputGroup>
      <C.InputGroup>
        <C.Label>Valor</C.Label>
        <C.Input
          value={amount}
          type="number"
          step="0.01"
          min="0"
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0,00"
        />
      </C.InputGroup>
      <C.InputGroup>
        <C.Label>Tipo</C.Label>
        <C.RadioGroup>
          <C.RadioLabel>
            <input
              type="radio"
              name="transactionType"
              checked={!isExpense}
              onChange={() => setIsExpense(false)}
            />
            Entrada
          </C.RadioLabel>
          <C.RadioLabel>
            <input
              type="radio"
              name="transactionType"
              checked={isExpense}
              onChange={() => setIsExpense(true)}
            />
            Saída
          </C.RadioLabel>
        </C.RadioGroup>
      </C.InputGroup>
      <C.Button onClick={handleSave}>Adicionar</C.Button>
    </C.Container>
  );
};

export default TransactionForm;
