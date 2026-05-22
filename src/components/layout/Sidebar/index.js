import { NavLink } from 'react-router-dom';
import { FiGrid, FiDollarSign, FiCpu, FiUser } from 'react-icons/fi';
import * as C from './styles';

const Sidebar = ({ isOpen }) => {
  return (
    <C.Container $isOpen={isOpen}>
      <C.Logo>Controle Financeiro</C.Logo>
      <C.Nav>
        <NavLink to="/" end>
          <FiGrid /> Dashboard
        </NavLink>
        <NavLink to="/transactions">
          <FiDollarSign /> Transações
        </NavLink>
        <NavLink to="/advisor">
          <FiCpu /> Consultor IA
        </NavLink>
      </C.Nav>
      <C.BottomLink to="/myacount">
        <FiUser /> Minha Conta
      </C.BottomLink>
    </C.Container>
  );
};

export default Sidebar;
