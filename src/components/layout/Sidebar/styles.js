import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.aside`
  width: 250px;
  height: 100vh;
  background: #1e293b;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    transform: ${({ $isOpen }) =>
      $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  }
`;

export const Logo = styled.div`
  padding: 24px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  border-bottom: 1px solid #334155;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  flex: 1;

  a {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 24px;
    color: #94a3b8;
    text-decoration: none;
    font-size: 15px;
    transition: all 0.2s;

    &:hover {
      background: #334155;
      color: #fff;
    }

    &.active {
      background: #0d9488;
      color: #fff;
    }

    svg {
      font-size: 18px;
    }
  }
`;

export const BottomLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  color: #94a3b8;
  text-decoration: none;
  font-size: 15px;
  transition: all 0.2s;
  border-top: 1px solid #334155;

  &:hover {
    background: #334155;
    color: #fff;
  }

  &.active {
    background: #0d9488;
    color: #fff;
  }

  svg {
    font-size: 18px;
  }
`;
