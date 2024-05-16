
import { SubmitButton, Title, Container } from './Signup.styles';

// eslint-disable-next-line react/prop-types
const Signup = () => {

  
  return (
    <div>
         <Title>Cadastro</Title>
         <Container>

        <SubmitButton type="submit">
        <a style={{ "text-decoration": "none", color: "#eee" }} href="/FormCadastro">
      
        Signup</a></SubmitButton>
         </Container>
    </div>
  )
}

export default Signup