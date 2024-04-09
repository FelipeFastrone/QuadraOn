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
        O lugar certo para você nao ficar sem praticar seu esporte!
      </Subtitle>
      <Img src={imgFute}></Img>

      <Paragraph>
        Busque pelo local mais proximo a você, seja qual for o esporte, quadra,
        campo temos diversas opções de locais e esportes, jogue com amigos ou
        faça novas amizades buscando por encaixes
      </Paragraph>
      <Img src={imgTenis}></Img>
      <Button>
        <a style={{ "text-decoration": "none", color: "#eee" }} href="/Quadras">
          Quadras perto de mim
        </a>
      </Button>
      <Img src={imgFut}></Img>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum labore ea recusandae quis reprehenderit corrupti optio magnam tenetur, assumenda dolor accusantium voluptas deleniti tempore, perferendis dolorem modi. Libero, voluptate!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut vitae mollitia dolorum consectetur quam, recusandae quod reiciendis obcaecati. Ipsam error asperiores repellat dolorem. Aspernatur, animi iste omnis soluta debitis fuga!
      </Paragraph>
      <Button>
        <a style={{ "text-decoration": "none", color: "#eee" }} href="/Quadras">
          Quadras perto de mim
        </a>
      </Button>
    </Container>
  );
};

export default Home;
