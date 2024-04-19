import { useState } from "react";
import {
  PayamentWrapper,
  InputWrapper,
  Placeholder,
  Input,
  Title,
  Button,
} from "./PayamentForm.styles";

const PayamentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };
  const handleBlur = (e) => {
    if (!e.target.value) {
      setIsActive(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventdefault();

    console.log(cardNumber, expiry, cvv);
  };

  return (
    <PayamentWrapper>
        <Title>Informações de Pagamento</Title>
      <InputWrapper>
        <form onSubmit={handleSubmit}>
          <Placeholder active={isActive} htmlFor="cardNumber">
            Número do cartão
          </Placeholder>
          <Input
            type="text"
            id="cardNumber"
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={(e) => setCardNumber(e.target.value)}
          />

          <Input
            type="text"
            id="expirationDate"
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={(e) => setExpiry(e.target.value)}
          />
          <Placeholder active={isActive} htmlFor="expirationDate">
            Data de validade
          </Placeholder>
          <Input
            type="text"
            id="cvv"
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={(e) => setCvv(e.target.value)}
          />
          <Placeholder active={isActive} htmlFor="cvv">
            CVV
          </Placeholder>

          <Button type="submit">Pagar</Button>
        </form>
      </InputWrapper>
    </PayamentWrapper>
  );
};

export default PayamentForm;
