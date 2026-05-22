import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  max-width: 1120px;
  margin: 0 auto;
  border-collapse: collapse;
  overflow: hidden;
`;

export const Thead = styled.thead`
  background: #f8fafc;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #f1f5f9;
  }
`;

export const Th = styled.th`
  text-align: ${({ $alignCenter }) => ($alignCenter ? 'center' : 'left')};
  padding: 14px 16px;
  font-size: 12px;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
`;

export const Td = styled.td`
  padding: 14px 16px;
  font-size: 14px;
  color: #1e293b;
  text-align: ${({ $alignCenter }) => ($alignCenter ? 'center' : 'left')};

  svg {
    width: 18px;
    height: 18px;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #ef4444;
    }
  }
`;

export const EmptyMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #94a3b8;
  font-size: 14px;
`;
