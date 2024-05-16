import campo from "../assets/campo.jpg"
import tenis from "../assets/tenis.jpg"
import basquete from "../assets/basquete.jpg"


import Card from "../components/layout/Card"
import { Container, Title } from "./Quadras.styles"


const Quadras = () => {
  return (
    <Container>
    <Title>Quadras</Title>
    <Card
      img={campo}
      title={"Futebol"}
      span={"Venha conhecer nosso campo"}
      more={"ver mais"}
      link={"/Campo"}

    />
    <Card
      img={tenis}
      title={"Tênis"}
      span={"A melhor quadra da região"}
      more={"ver mais"}
      link={"/Tenis"}

    />
    <Card
      img={basquete}
      title={"Basquete"}
      span={"Agende seu horário em nossas quadras"}
      more={"ver mais"}
      link={"/Basquete"}
    />
    </Container>
  )
}

export default Quadras