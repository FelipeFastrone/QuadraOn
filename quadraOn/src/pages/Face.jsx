// QuadraDetalhe.jsx
import styled from 'styled-components';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import img from "../assets/futebol.jpg"
const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
`;

const Titulo = styled.h2`
  margin-bottom: 1rem;
  color: #2c3e50;
`;

const Imagem = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 1rem;
  object-fit: cover;
  height: 300px;
`;

const Info = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.span`
  font-weight: bold;
  color: #34495e;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 1rem;
  border-radius: 10px;
  overflow: hidden;
`;

const dadosQuadra = {
  nome: 'Bola Cheia',
  telefone: '(19) 98888-7777',
  email: 'bolacheia@quadrasociety.com.br',
  endereco: 'Rua Antonio Olivari, 51 - Pedreira, SP',
  localizacao: {
    lat: -23.55052,
    lng: -46.633308,
  },
};

export default function QuadraDetalhe() {
  const apiKey = "AIzaSyCG0Pk-fYOvFDVGuloMDZIKyORfU7Hi_r4";

  return (
    <Container>
      <Titulo>{dadosQuadra.nome}</Titulo>
      <Imagem src={img} alt={dadosQuadra.nome} />

      <Info>
        <Label>Telefone:</Label> {dadosQuadra.telefone}
      </Info>
      <Info>
        <Label>Email:</Label> {dadosQuadra.email}
      </Info>
      <Info>
        <Label>Endereço:</Label> {dadosQuadra.endereco}
      </Info>

      <MapContainer>
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={dadosQuadra.localizacao}
            zoom={16}
          >
            <Marker position={dadosQuadra.localizacao} />
          </GoogleMap>
        </LoadScript>
      </MapContainer>
    </Container>
  );
}
