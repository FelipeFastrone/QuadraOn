import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  background-color: green;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  gap: 14em;
  align-items: center;
  position: fixed;
  z-index: 3;


`;
export const Menu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
`;
export const Logo = styled.h1`
  font-size: 1.3em;
  color: #eee;
`;
export const Hamburguer = styled.div`
  color: #eee;
  background-color: green;
  font-size: 1.4em;
  margin: 0.6em;
  @media (min-width: 1200px) {
    display:none;
  }
`;
export const List = styled.ul`
  width: 100vw;
  height: 65vh;
  padding: 3em 8em 5em 6em;
  display: ${({ openMenu }) => (openMenu ? "flex" : "none")};
  background-color: green;
  flex-direction: column;
  list-style: none;
  line-height: 3.3rem;
  font-size: 1.5em;
  text-align: justify;
  list-style: none;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    background-color: transparent;
    justify-content: end;
    margin-top: -58px;
    margin-right: -260px;
    gap: 3em;
    font-size: 1.2em;
  }
  
   
`;
export const ListIcons = styled.ul`
  width: fit-content;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 1.2em;
  list-style: none;
  list-style: none;
  color: white;
  margin-top: 40%;
`;




