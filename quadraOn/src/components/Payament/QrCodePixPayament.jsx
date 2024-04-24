import { useState } from 'react';
import styled from 'styled-components';
import QRCode from 'qrcode.react';

const PaymentPage = () => {
  const [pixKey, setPixKey] = useState();
  const [amount, setAmount] = useState('');
  const [qrCodeData, setQRCodeData] = useState('');

  const handlePayment = () => {
    // Verifica se os campos chave PIX e valor estão preenchidos
    if (!pixKey || !amount) {
      alert('Por favor, preencha a chave PIX e o valor.');
      return;
    }

    // Gera o conteúdo do QR code
    const qrData = `chave=${pixKey}&valor=${amount}`;
    setQRCodeData(qrData);

    // Aqui você pode adicionar a lógica para processar o pagamento PIX
    console.log('Realizando pagamento PIX...');
    console.log('Chave PIX:', pixKey);
    console.log('Valor:', amount);
    // Adicione aqui a lógica para enviar os dados para seu backend ou sistema de pagamento
  };

  return (
    <Container>
      <h1>Página de Pagamento por PIX</h1>
      <InputContainer>
        <label>Chave PIX:</label>
        <input
          type="text"
          value={pixKey}
          onChange={(e) => setPixKey(e.target.value)}
          placeholder="Digite sua chave PIX"
        />
      </InputContainer>
      <InputContainer>
        <label>Valor:</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Digite o valor a ser pago"
        />
      </InputContainer>
      <PaymentButton onClick={handlePayment}>Pagar</PaymentButton>
      <QRCodeContainer>
        {qrCodeData && (
          <QRCode value={qrCodeData} size={200} />
        )}
      </QRCodeContainer>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const PaymentButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const QRCodeContainer = styled.div`
  margin-top: 20px;
`;

export default PaymentPage;
