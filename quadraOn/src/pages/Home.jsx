import {
  Container,
  Title,
  Subtitle,
  Paragraph,
  Button,
  Img,
} from "./Home.styles";
import imgTenis from "../assets/tenisHome.jpg";
import imgFut from "../assets/futHome.jpg";
import imgFute from "../assets/fut2Home.jpg";

const Home = () => {
  return (
    <Container>
      <Title>QuadraOn</Title>
      <Subtitle>
        O lugar certo para você não ficar sem praticar seu esporte!
      </Subtitle>
      <Img src={imgFute}></Img>

      <Paragraph>
      Busque pelo local mais próximo a você, seja qual for o esporte, quadra, campo temos diversas opções de locais e esportes, jogue com amigos ou faça novas amizades buscando por encaixes.
      </Paragraph>
      <Img src={imgTenis}></Img>
      <Button>
        <a style={{ "text-decoration": "none", color: "#eee" }} href="/Quadras">
          Ver tipo de quadras
        </a>
      </Button>
      <Img src={imgFut}></Img>
      <Paragraph>
         A paixão pelo esporte é mais do que apenas uma atividade física; é uma
        forma de vida, uma fonte de inspiração e uma expressão de identidade.
        Ela nos ensina a sonhar alto, a perseverar diante dos desafios e a
        celebrar as conquistas, grandes ou pequenas. É essa paixão que nos
        impulsiona a superar nossos limites, a nos conectar com os outros e a
        encontrar significado em cada jogo, em cada momento compartilhado.
      </Paragraph>
      <Button>
        <a style={{ "text-decoration": "none", color: "#eee" }} href="/Quadras">
        Ver tipo de quadras
        </a>
      </Button>
    </Container>
  );
};

export default Home;
