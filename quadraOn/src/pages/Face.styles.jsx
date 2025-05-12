import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
`;
export const ContainerBox = styled.div`
  width: 50vw;
  height: 100vh;
  position: relative;
  margin: 200px 0 0 200px;
`;
export const Title = styled.h1`
   margin: 30px auto;
`;

export const ProfileImage = styled.img`
  max-width: 80%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const InfoContainer = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Info = styled.span`
  display: block;
  margin-top: 5px;
`;
export const SelectContainer = styled.div`
  margin: 100px auto;
  `;
  export const Btn = styled.button`
  width: fit-content;
  padding: 16px 24px;
  text-align: center;
  border-radius: 10px;
  border: none;
  margin-bottom: 24px;
  color: #fff;
  background-color: green;
  @media (min-width: 1200px) {
    margin: 30px 0 34px 54px;
  }
`;
