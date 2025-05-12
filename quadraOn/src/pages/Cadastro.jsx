// QuadraCadastro.jsx
import  { useState } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Container = styled.div`
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #2c3e50;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.3rem;
  color: #34495e;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;

  &:hover {
    background-color: #219653;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 1rem;
  border-radius: 8px;
  overflow: hidden;
`;

const defaultCenter = {
  lat: -23.55052,
  lng: -46.633308,
};

export default function QuadraCadastro() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    email: '',
    endereco: '',
  });
  const [position, setPosition] = useState(null);
  const apiKey = "AIzaSyCG0Pk-fYOvFDVGuloMDZIKyORfU7Hi_r4";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const buscarEndereco = async () => {
    const encoded = encodeURIComponent(form.endereco);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded}&key=${apiKey}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.status === 'OK') {
        const location = data.results[0].geometry.location;
        setPosition(location);
      } else {
        alert('Endereço não encontrado');
      }
    } catch (err) {
      console.error('Erro ao buscar endereço:', err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', { ...form, localizacao: position });
    alert('Cadastro enviado com sucesso!');
  };

  return (
    <Container>
      <Title>Cadastro de Quadra para Locação</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nome da Quadra</Label>
          <Input type="text" name="nome" value={form.nome} onChange={handleChange} required />
        </FormGroup>

        <FormGroup>
          <Label>Telefone</Label>
          <InputMask
            mask="(99) 99999-9999"
            value={form.telefone}
            onChange={handleChange}
          >
            {(inputProps) => <Input {...inputProps} name="telefone" required />}
          </InputMask>
        </FormGroup>

        <FormGroup>
          <Label>Email</Label>
          <Input type="email" name="email" value={form.email} onChange={handleChange} required />
        </FormGroup>

        <FormGroup>
          <Label>Endereço</Label>
          <Input type="text" name="endereco" value={form.endereco} onChange={handleChange} required />
          <Button type="button" onClick={buscarEndereco}>Buscar no Mapa</Button>
        </FormGroup>

        <MapContainer>
          <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={position || defaultCenter}
              zoom={position ? 16 : 12}
            >
              {position && <Marker position={position} />}
            </GoogleMap>
          </LoadScript>
        </MapContainer>

        <Button type="submit">Cadastrar Quadra</Button>
      </form>
    </Container>
  );
}
