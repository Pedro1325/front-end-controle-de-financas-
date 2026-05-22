import { FiMenu } from 'react-icons/fi';
import * as C from './styles';

const Header = ({ title, onMenuClick }) => {
  return (
    <C.Container>
      <C.Left>
        <C.MenuButton onClick={onMenuClick}>
          <FiMenu />
        </C.MenuButton>
        <C.Title>{title}</C.Title>
      </C.Left>
    </C.Container>
  );
};

export default Header;
