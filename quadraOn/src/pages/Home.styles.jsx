import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100%;
   margin-top: 4.3em;
   color: #333;
   @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 992px) {
    
  }

  @media (min-width: 1200px) {
   
  }
`;

export const Title = styled.h1`
   padding: 1em;
   text-align: center;
   font-weight: bolder;
`;

export const Subtitle = styled.h3`
   padding: 1em;
   text-align: center;
   
   @media (min-width: 1200px) {
  text-align: justify;
   margin: 2em 18em;
   

  }
`;

export const Paragraph = styled.p`
  padding: 1em;
  text-align: justify;
  text-indent: 1.3em;
  margin: 2em 0;

  
  @media (min-width: 1200px) {
  text-align: justify;
   margin: 2em 18em;
   

  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.3em;
  border-radius: 20px;
  margin: 2em auto;
  list-style: none;
  background-color: green;
  border: none;
  &:hover {
    background-color: #04391F; /* verde puro */
  }
`;
export const Img = styled.img`
  display: flex;
  margin: 0 auto;
  width: 98vw;
  height: 50vh;

  @media (min-width: 992px) {
    width: 60vw;
    height: 40vh;
  }

  @media (min-width: 1200px) {
   width: 50%;
   height: 30%;

  }
`;