import {  Hamburguer, List, Logo, Wrapper, Menu } from "./Navbar.styles";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);

  };
  return (
    <Wrapper>
      
        <Logo>QuadraOn</Logo>
      <Menu>
        <Hamburguer onClick={toggleMenu}>
          {openMenu ? <RxCross2 /> : <RxHamburgerMenu />}
        </Hamburguer>
        <List openMenu={openMenu}>
          <Link onClick={toggleMenu} to="/">Home</Link>
          <Link onClick={toggleMenu} to="/Quadras">Quadras</Link>
          <Link onClick={toggleMenu} to="/Contato">Contato</Link>
          <Link onClick={toggleMenu} to="/Sobre">Sobre</Link>
        </List>
      </Menu>
    </Wrapper>
  );
};

export default Navbar;
