import { Container, Img, Btn } from "./Tenis.styles";
import { Title } from "./Home.styles";

import img from "../assets/tenis.jpg";
import {FaWhatsapp} from "react-icons/fa";


const Tenis = () => {
  return (
    <Container>
      <Title>Tenis</Title>
      <Img src={img} />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error quisquam provident enim odit cumque deleniti blanditiis sapiente, possimus asperiores itaque cum odio voluptas quis magnam nisi rerum dolorum numquam voluptatibus.</p>
      <Btn href="https://wa.me/5519997254924">Agende seu horário<FaWhatsapp></FaWhatsapp></Btn>

    </Container>
  );
};

export default Tenis;
