import { Container, Img, Btn, Text } from "./Basquete.styles";
import { Title } from "./Home.styles";
import img from "../assets/basquete.jpg";


const Basquete = () => {
  return (
    <Container>
      <Title>Basquete</Title>

      <Img src={img} alt="" />
      <Text>
        O basquete transcende as linhas da quadra, é uma paixão que pulsa nos
        corações dos seus admiradores. Cada movimento, cada cesta, é uma
        expressão de habilidade e determinação. Nas quadras, os jogadores se
        tornam artistas, driblando entre defesas, lançando-se no ar em busca da
        cesta perfeita. E para os torcedores, cada partida é uma montanha-russa
        de emoções, com momentos de êxtase e tensão que mantêm todos à beira de
        seus assentos.
      </Text>
      <Btn href="#">
        Ver disponíveis
      </Btn>

    
    </Container>
  );
};

export default Basquete;
