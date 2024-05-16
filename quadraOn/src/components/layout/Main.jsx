
import { Routes, Route } from 'react-router-dom';

import Home from "../../pages/Home";
import Quadras from "../../pages/Quadras";
import Cadastro from "../../pages/Cadastro";
import Contato from "../../pages/Contato";
import Sobre from "../../pages/Sobre";


import Campo from "../../pages/Campo";
import Basquete from "../../pages/Basquete";
import Tenis from "../../pages/Tenis";


import { Container } from "./Main.styles";
import Payament from '../Payament/Payament';
import FormCadastro from '../../pages/FormCadastro';
import Face from "../../pages/Face";

const Main = () => {
  return (
    <Container>
    <Routes>
      <Route
         exact
         path='/'
         element={<Home/>}>
      </Route>
      <Route
         path='/Quadras'
         element={<Quadras/>}>
      </Route>
       <Route
         path='/Contato'
         element={<Contato/>}>
       </Route>
       <Route
         path='/Cadastro'
         element={<Cadastro/>}>
       </Route>

       <Route
         path='/Sobre'
         element={<Sobre/>}>
       </Route>
       <Route
         path='/Campo'
         element={<Campo/>}>
       </Route>
       <Route
         path='/Tenis'
         element={<Tenis/>}>
       </Route>
       <Route
         path='/Basquete'
         element={<Basquete/>}>
       </Route>
              <Route
         path='/FormCadastro'
         element={<FormCadastro/>}>
       </Route>
       <Route
         path='/Payament'
         element={<Payament/>}>
       </Route>
       <Route
         path='/Face'
         element={<Face/>}>
       </Route>
       
      </Routes>

    </Container>
  );
};

export default Main;
