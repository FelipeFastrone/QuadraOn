import { Container, Title, Span, Img, Ancora} from "./Card.styles"
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Card = ({title, span, img, more, link}) => {
  return (
    <Container>
    <Title>{title}</Title>
    <Img src={img}></Img>
    <Span>{span}</Span>
    <Link to={link}>
    <Ancora>{more}</Ancora>
    </Link>
    </Container>
  )
}

export default Card