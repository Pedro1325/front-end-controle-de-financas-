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
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  font-size: 20px;
  color: #1e293b;
  margin-bottom: 24px;
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
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #0f766e;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ButtonSecondary = styled.button`
  padding: 10px 24px;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  cursor: pointer;
  color: #64748b;
  background: #fff;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: #f8fafc;
    border-color: #94a3b8;
  }
`;

export const ResultCard = styled.div`
  background: #f8fafc;
  border-radius: 8px;
  padding: 32px;
  border: 1px solid #e2e8f0;
  white-space: pre-wrap;
  line-height: 1.8;
  font-size: 14px;
  color: #1e293b;

  strong {
    color: #0d9488;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 48px;
  color: #64748b;
  font-size: 15px;
`;

export const Spinner = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid #e2e8f0;
  border-top-color: #0d9488;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const ErrorBox = styled.div`
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 16px 20px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 16px;
`;

export const InfoText = styled.p`
  font-size: 13px;
  color: #94a3b8;
  margin-top: 16px;
  text-align: center;
`;

export const ActionsRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
`;
