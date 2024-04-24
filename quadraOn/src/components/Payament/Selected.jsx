import { useState } from "react";
import PayamentForm from "./PayamentForm";
import QRCode from "qrcode.react";
import {
    Container,
    SelectContainer,
    PaymentButton,
    QRCodeContainer
  } from "./Selected.styles";
const Selected = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [pixKey, setPixKey] = useState("");
  const [qrCodeData, setQRCodeData] = useState(
    `chave=${pixKey}&valor=${selectedOption}`
  );

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleDelete = () => {
    setSelectedOption("");
  };
  //   const qrData =() => {
  //   `chave=${pixKey}&valor=${selectedOption}`;
  // }
  // setQRCodeData(qrData);

  // console.log('Realizando pagamento PIX...');
  // Aqui você pode adicionar a lógica para processar o pagamento PIX
  // console.log('Valor:', selectedOption);
  // Adicione aqui a lógica para enviar os dados para seu backend ou sistema de pagamento

  // const handlePayment = () => {
  //   // Aqui você pode usar o valor selecionado
  //   console.log("Opção selecionada:", selectedOption);
  //   // Adicione aqui a lógica para processar o pagamento com base na opção selecionada
  // };

  return (
    <Container>
      <SelectContainer>
        <label>Selecione uma opção:</label>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">Selecione...</option>
          <option value="R$ 10,00">Uma hora R$ 10,00</option>
          <option value="R$ 18,00">Duas horas R$ 18,00 </option>
          <option value="R$ 25,00">Três horas R$ 25,00 </option>
        </select>
      </SelectContainer>

      {selectedOption ? <PayamentForm /> : ""}
      {selectedOption ? (
        <Container>
          <h3>Pagamento por PIX</h3>
          <span>Valor:{selectedOption}</span>

          <PaymentButton onClick={handleDelete}>Limpar</PaymentButton>
          <QRCodeContainer>
            {qrCodeData && <QRCode value={qrCodeData} size={200} />}
          </QRCodeContainer>
        </Container>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Selected;
