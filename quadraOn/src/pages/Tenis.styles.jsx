import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 80vh;
   margin-top: 4.3em;
   color: #fff;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 32px
`;

export const Img = styled.img`
  display: flex;
  margin: 0 auto;
  width: 98vw;
  height: 50vh
`;
export const Btn = styled.button`
width: fit-content;
padding: 12px 18px;
text-align: center;
border-radius: 10px;
border: none;
margin-bottom: 24px;
color: #fff;
background-color: green;
`;