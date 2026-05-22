import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  max-width: 1120px;
  margin: 0 auto 24px;
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 16px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 180px;
`;

export const Label = styled.label`
  font-size: 13px;
  color: #64748b;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 10px 12px;
  font-size: 14px;
  border: 1px solid #e2e8f0;
  transition: border-color 0.2s;
  background: #f8fafc;

  &:focus {
    border-color: #0d9488;
    background: #fff;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 0;
  min-width: 180px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #1e293b;
  cursor: pointer;

  input {
    accent-color: #0d9488;
  }
`;

export const Button = styled.button`
  padding: 10px 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background: #0d9488;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: background 0.2s;
  height: fit-content;

  &:hover {
    background: #0f766e;
  }
`;
