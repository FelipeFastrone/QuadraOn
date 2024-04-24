import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 4.3em;
  color: #333;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  @media (min-width: 1200px) {
    gap: 20px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const PaymentButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


export const QRCodeContainer = styled.div`
  margin: 20px 0;
  
`;