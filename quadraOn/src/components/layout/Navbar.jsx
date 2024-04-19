import {
  Hamburguer,
  List,
  Logo,
  Wrapper,
  Menu,
  ListIcons,
} from "./Navbar.styles";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

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
          <Link
            style={{ "text-decoration": "none", color: "#eee" }}
            onClick={toggleMenu}
            to="/"
          >
            Home
          </Link>
          <Link
            style={{ "text-decoration": "none", color: "#eee" }}
            onClick={toggleMenu}
            to="/Quadras"
          >
            Quadras
          </Link>
          <a
            style={{ "text-decoration": "none", color: "#eee" }}
            onClick={toggleMenu}
            href="#contact"
          >
            Contato
          </a>
          <Link
            style={{ "text-decoration": "none", color: "#eee" }}
            onClick={toggleMenu}
            to="/Sobre"
          >
            Sobre
          </Link>
          <Link
            style={{ "text-decoration": "none", color: "#eee" }}
            onClick={toggleMenu}
            to="/Cadastro"
          >
            Cadastro
          </Link>

          <ListIcons>
            <FaFacebook></FaFacebook>
            <FaInstagram></FaInstagram>
            <FaWhatsapp></FaWhatsapp>
          </ListIcons>
        </List>
      </Menu>
    </Wrapper>
  );
};

export default Navbar;
