import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 32px;
`;

export const Title = styled.h2`
  font-size: 20px;
  color: #1e293b;
  margin-bottom: 24px;
`;

export const InfoText = styled.p`
  font-size: 14px;
  color: #94a3b8;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 200px;
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

export const FormRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  padding: 12px 32px;
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

  &:hover {
    background: #0f766e;
  }
`;
