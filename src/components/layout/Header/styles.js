import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 32px;
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #1e293b;
  padding: 4px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #1e293b;
`;
