import styled from 'styled-components';

export const Tr = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #f1f5f9;
  }
`;

export const Td = styled.td`
  padding: 14px 16px;
  font-size: 14px;
  color: #1e293b;
  text-align: ${({ $alignCenter }) => ($alignCenter ? 'center' : 'left')};
  word-break: break-all;

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
