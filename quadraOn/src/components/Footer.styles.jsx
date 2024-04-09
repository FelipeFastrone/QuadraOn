import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: green;
  line-height: 2.5em;
  color: #fff;

  @media (min-width: 1200px) {
    justify-content: flex-start;
  }
`;

export const Address = styled.address`
  font-size: 1.2em;
  @media (min-width: 1200px) {
    text-align: justify;
    margin: 2em 18em;
  }
`;
export const Paragraph = styled.p`
  font-size: 1.2em;
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
  font-size: 1.8em;
  margin: 0.8em 0 1em 0;

  @media (min-width: 1200px) {
    justify-content: space-around;
  }
`;
