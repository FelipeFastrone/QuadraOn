import {
  Container,
  ProfileImage,
  Label,
  InfoContainer,
  Info,
  Title,
  SelectContainer,
  Btn
} from "./Face.styles";
import img from "../assets/futebol.jpg";
const Profile = () => {
  return (
    <Container>
      <Title>Soccer Styles</Title>
      <ProfileImage src={img} alt="Foto do Estabelecimento" />
      <InfoContainer>
        <Label>Horários disponíveis:</Label>
        <Info>10:00</Info>
        <Info>17:00</Info>
        <Info>20:00</Info>
      </InfoContainer>
      <InfoContainer>
        <Label>Telefone:</Label>
        <Info>(19)99999-9999</Info>
      </InfoContainer>
      <InfoContainer>
        <Label>Email:</Label>
        <Info>soccerstyles@quadra.com</Info>
      </InfoContainer>
      <SelectContainer>
      <Btn>
      <a style={{ "text-decoration": "none", color: "#eee" }} href="/Payament">
     
        Ir para Pagamento
        </a>
      </Btn>
      </SelectContainer>
    </Container>
  );
};

export default Profile;
