import { useDados } from '../../core/hooks/useDados';
import * as C from './styles';

const MyAccount = () => {
  const { data, updateData } = useDados();

  const handleChange = (field) => (e) => {
    updateData({ [field]: e.target.value });
  };

  return (
    <C.Container>
      <C.Card>
        <C.Title>Meus Dados</C.Title>
        <C.InfoText style={{ marginBottom: 24 }}>
          Preencha suas informações para usar no consultor de IA e acompanhar
          seu planejamento financeiro.
        </C.InfoText>

        <C.FormRow>
          <C.InputGroup>
            <C.Label>Nome</C.Label>
            <C.Input
              value={data.name}
              onChange={handleChange('name')}
              placeholder="Seu nome"
            />
          </C.InputGroup>
          <C.InputGroup>
            <C.Label>Salário mensal (R$)</C.Label>
            <C.Input
              type="number"
              step="0.01"
              min="0"
              value={data.salary}
              onChange={handleChange('salary')}
              placeholder="5000,00"
            />
          </C.InputGroup>
        </C.FormRow>

        <C.FormRow>
          <C.InputGroup>
            <C.Label>Objetivo financeiro</C.Label>
            <C.Input
              value={data.goalName}
              onChange={handleChange('goalName')}
              placeholder="Ex: PlayStation, Carro, Apartamento..."
            />
          </C.InputGroup>
          <C.InputGroup>
            <C.Label>Custo do objetivo (R$)</C.Label>
            <C.Input
              type="number"
              step="0.01"
              min="0"
              value={data.goalCost}
              onChange={handleChange('goalCost')}
              placeholder="3500,00"
            />
          </C.InputGroup>
        </C.FormRow>

        <C.Button onClick={() => updateData({})}>
          Salvar
        </C.Button>
      </C.Card>
    </C.Container>
  );
};

export default MyAccount;
