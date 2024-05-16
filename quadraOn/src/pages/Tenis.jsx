import { Container, Img, Btn, Text } from "./Tenis.styles";
import { Title } from "./Home.styles";

import img from "../assets/tenis.jpg";

const Tenis = () => {
  return (
    <Container>
      <Title>Tênis</Title>
      <Img src={img} />
      <Text>
        No mundo do tênis, a paixão é palpável em cada saque, em cada troca de
        bola. É um esporte que combina graça e poder, habilidade e estratégia,
        em uma dança frenética sobre a quadra. Para os jogadores, o tênis é mais
        do que apenas um jogo - é uma obsessão, uma busca incessante pela
        excelência em cada golpe. Cada raquete é uma extensão de si mesmos, e
        cada ponto conquistado é uma vitória pessoal.
      </Text>
      <Btn href="#">Ver disponiveis</Btn>
    </Container>
  );
};

export default Tenis;
