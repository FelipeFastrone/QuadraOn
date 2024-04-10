import { Container, Address, Paragraph, ListIcons } from "./Footer.styles.jsx"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <Container>
      <Address id="contact">
      
      
      
                <strong>Quadra On</strong>  <br/>
                <strong>Email:</strong> <a href="mailto:quadraon@email.com">quadraon@email.com</a> <br/>
                <strong>Telefone:</strong> (11) 1234-5678 <br />
                <strong>Endereço:</strong> Rua Dr Esportes sempre, nº 123
      </Address>
      <Paragraph>Produzido e mantido por grupo de P.I 011</Paragraph>
      <ListIcons>
          <FaFacebook></FaFacebook>
          <FaInstagram></FaInstagram>
          <FaWhatsapp></FaWhatsapp>
          </ListIcons>
    </Container>
    </>
  )
}

export default Footer