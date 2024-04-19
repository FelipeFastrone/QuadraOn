import styled from "styled-components";

export const PayamentWrapper = styled.div`
  width: 80vw;
  height: 100%;
  margin-top: 4.3em;
  color: #333;

  @media (min-width: 768px) {
    max-width: 20%;
  }
`;
export const Title = styled.h1`
   padding: 1em;
   text-align: center;
   font-weight: bolder;
   font-size: 1.6em;
`;

export const InputWrapper = styled.div`
  margin-bottom: 20px;
  position: relative;
  z-index: 1;

  `;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  background-color: lightgray;


  &:focus {
    border-color: green;
  }
`;

export const Placeholder = styled.span`
  position: absolute;
  left: 10px;
  background-color: transparent;
  margin: ${(props) => (props.active ? "-10px 10px" : "0")};
  padding: ${(props) => (props.active ? "0 0px" : "30px 0")};
  font-size: ${(props) => (props.active ? "14px" : "16px")};
  color: ${(props) => (props.active ? "green" : "#999")};
  transition: all 0.3s ease;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  border-radius: 20px;
  margin: 2em auto;
  font-size: 1em;
  color: #fff;
  background-color: green;
  border: none;
  &:hover {
    background-color: #04391F; /* verde puro */
  }
`;
