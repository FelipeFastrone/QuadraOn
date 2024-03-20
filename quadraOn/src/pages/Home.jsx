import { Container, Title, Subtitle, Paragraph, Button } from "./Home.styles"

const Home = () => {
  return (
    <Container>
        <Title>QuadraOn</Title>
        <Subtitle>O lugar certo para você nao ficar sem praticar seu esporte!</Subtitle>
        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eum quasi debitis beatae, sapiente dolor aspernatur suscipit optio aliquid porro expedita fugit labore eaque laborum qui ad animi rem dolorum.</Paragraph>
        <Button><a href="/Quadras">Quadras perto de mim</a></Button>
    </Container>
  )
}

export default Home