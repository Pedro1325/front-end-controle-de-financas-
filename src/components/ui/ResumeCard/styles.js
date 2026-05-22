import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  flex: 1;
  min-width: 200px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border-left: 4px solid ${({ $color }) => $color || '#0d9488'};

  @media (max-width: 750px) {
    min-width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  svg {
    font-size: 24px;
    color: ${({ $color }) => $color || '#0d9488'};
  }
`;

export const Title = styled.p`
  font-size: 14px;
  color: #64748b;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Value = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: ${({ $color }) => $color || '#1e293b'};

  @media (max-width: 750px) {
    font-size: 22px;
  }
`;
