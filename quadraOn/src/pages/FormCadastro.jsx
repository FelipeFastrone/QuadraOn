import  { useState } from 'react';
import {Form, Label, Input, TextArea, FormContainer, Button, Title
} from "./FormCadastro.styles";

const FormCadastro = () => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [horarios, setHorarios] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ nome, endereco, telefone, horarios });
  };

  return (
    <FormContainer>
      <Title>Cadastro de Estabelecimento</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="nome">Nome do Estabelecimento:</Label>
        
        <Input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <Label htmlFor="endereco">Endereço:</Label>
        <Input
          type="text"
          id="endereco"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          required
        />

        <Label htmlFor="telefone">Telefone:</Label>
        <Input
          type="tel"
          id="telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />

        <Label htmlFor="horarios">Horários de Funcionamento:</Label>
        <TextArea
          id="horarios"
          value={horarios}
          onChange={(e) => setHorarios(e.target.value)}
          rows="4"
          required
        />

        <Button type="submit">Cadastrar</Button>
      </Form>
    </FormContainer>
  );
};

export default FormCadastro;
