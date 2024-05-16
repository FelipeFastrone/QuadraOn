import styled from 'styled-components';


export const Title = styled.h1`
   padding: 1em;
   text-align: center;
   font-weight: bolder;
   color : #333;
  
`;

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
`;



export const SubmitButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;
