import Home from "../pages/Home";
import Quadras from "../pages/Quadras";
import Contato from "../pages/Contato";
import Sobre from "../pages/Sobre";

import { Container } from "./Main.styles";
import { Routes, Route } from 'react-router-dom'

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
         path='/Sobre'
         element={<Sobre/>}>
       </Route>
       
      </Routes>
      
    </Container>
  );
};

export default Main;
