import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 50vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: #eee;
  line-height: 1.8em;
  margin-bottom: 26px;

  border-radius: 5px;
  box-shadow: 6px 6px 6px 0px #775;
  text-decoration: none;

   @media (min-width: 1200px) {
    width: 70vw;
    height: 100vh;
  } 
`;

export const Span = styled.span`
  padding-top: 20px;
`;
export const Title = styled.h4`
  padding-top: 20px;
`;

export const Img = styled.img`
  width: 70vw;
  height: 40%;
  margin: 20px;
   @media (min-width: 1200px) {
    width:  50vw;
    height: 60vh;
  } 
`;

export const Ancora = styled.button`
  padding-top: 20px;
  color: #008000;
  width: fit-content;
  cursor: pointer;
  border: none;
`;
