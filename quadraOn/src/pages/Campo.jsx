import { Container, Img, Btn, Text } from "./Campo.styles";
import { Title } from "./Home.styles";
import img from "../assets/campo.jpg";
import { FaWhatsapp } from "react-icons/fa";
import Selected from "../components/Payament/Selected";

// eslint-disable-next-line react/prop-types
const Campo = () => {
  return (
    <Container>
      <Title>Jogue junto society</Title>
      <Img src={img} />
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error quisquam
        provident enim odit cumque deleniti blanditiis sapiente, possimus
        asperiores itaque cum odio voluptas quis magnam nisi rerum dolorum
        numquam voluptatibus.
      </Text>
      <Btn href="https://wa.me/5519997254924">
        Agende seu horário
        <FaWhatsapp style={{ margin: "0 0 0 1em" }}></FaWhatsapp>
      </Btn>
      <Selected />
    </Container>
  );
};

export default Campo;
