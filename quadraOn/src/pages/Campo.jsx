import { Container, Img, Btn, Text } from "./Campo.styles";
import { Title } from "./Home.styles";
import img from "../assets/campo.jpg";
// import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Campo = () => {
  return (
    <Container>
      <Title>Campo</Title>
      <Img src={img} />
      <Text> 
      No coração de cada cidade, há um santuário onde a paixão se manifesta em cada grama verde. O campo de futebol, com suas linhas brancas como as páginas de um livro esperando para serem preenchidas com histórias emocionantes, é onde sonhos se transformam em realidade e onde as batalhas épicas do esporte são travadas. Sob o brilho do sol ou sob as luzes noturnas, as multidões se reúnem, ansiosas para testemunhar a magia que só o futebol pode oferecer.


      </Text>
      <Btn>
      <a style={{ "text-decoration": "none", color: "#eee" }} href="/Face">
     
        Ver disponiveis
        </a>
      </Btn>
    </Container>
  );
};

export default Campo;
