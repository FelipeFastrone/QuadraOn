import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 4.3em;
  color: #333;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  @media (min-width: 1200px) {
    gap: 20px;
  }
`;

export const Img = styled.img`
  display: flex;
  margin: 0 auto;
  width: 98vw;
  height: 50vh;
  @media (min-width: 1200px) {
    width: 40vw;
    height: 70vh;
  }
`;

export const Text = styled.p`
  text-align: justify;
  text-indent: 1em;
  margin: 1.2em;
  @media (min-width: 1200px) {
    width: 40vw;
    height: 70vh;
  }
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
    margin-top: -300px;
    margin-bottom: 34px;
  }
`;
