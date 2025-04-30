// PaymentPage.jsx
import  { useState } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import { FaRegCreditCard, FaCalendarAlt, FaLock, FaUser } from 'react-icons/fa';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4ff, #d6e4ff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Card = styled.div`
  background: #ffffff;
  padding: 3rem 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Field = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const Icon = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #007bff;
`;

const Input = styled(InputMask)`
  padding: 0.75rem 1rem 0.75rem 3rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 0.9rem;
  font-size: 1rem;
  background: linear-gradient(to right, #007bff, #0056b3);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #0056b3, #004085);
  }`


const PaymentPage = () => {
  const [form, setForm] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pagamento enviado com sucesso!');
    console.log('Dados do cartão:', form);
  };

  return (
    <Container>
      <Card>
        <Title>Pagamento com Cartão</Title>
        <Form onSubmit={handleSubmit}>
          <Field>
            <Icon><FaUser /></Icon>
            <Input
              type="text"
              name="name"
              placeholder="Nome no Cartão"
              value={form.name}
              onChange={handleChange}
              required
              mask=""
            />
          </Field>

          <Field>
            <Icon><FaRegCreditCard /></Icon>
            <Input
              type="text"
              name="cardNumber"
              placeholder="Número do Cartão"
              mask="9999 9999 9999 9999"
              value={form.cardNumber}
              onChange={handleChange}
              required
            />
          </Field>

          <Field>
            <Icon><FaCalendarAlt /></Icon>
            <Input
              type="text"
              name="expiry"
              placeholder="MM/AA"
              mask="99/99"
              value={form.expiry}
              onChange={handleChange}
              required
            />
          </Field>

          <Field>
            <Icon><FaLock /></Icon>
            <Input
              type="text"
              name="cvv"
              placeholder="CVV"
              mask="999"
              value={form.cvv}
              onChange={handleChange}
              required
            />
          </Field>

          <Button type="submit">Finalizar Pagamento</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default PaymentPage;
