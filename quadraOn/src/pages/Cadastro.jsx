import { useState } from "react";
import Login from "../components/forms/Login";
import Signup from "../components/forms/Signup";
import { Title, Container } from "./Cadastro.styles";

import Home from "../pages/Home";

const Cadastro = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (userData) => {
    console.log("Login", userData);
    setIsLoggedIn(true);
  };

  const handleSignup = (userData) => {
    console.log("Signup", userData);
    setIsLoggedIn(true);
  };

  return (
    <Container>
    <Title>Faça Login se ja possui um cadastro ou cadastre-se</Title>
      {isLoggedIn ? (
        <Home />
      ) : (
        <>
          <Login handleLogin={handleLogin} /> 
          <Signup handleSignup={handleSignup} />
        </>
      )}
    </Container>
  );
};

export default Cadastro;
