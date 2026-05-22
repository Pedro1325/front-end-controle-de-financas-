import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
  margin-left: 250px;
  background: #f1f5f9;
  min-height: 100vh;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Content = styled.div`
  padding: 32px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
  }
`;
