import styled from "styled-components";
import Background from "../../assets/background_landscape.jpg";

export const Main = styled.main`
  margin: auto;
  padding-top: 1.5rem;
`;

export const BackgroundImageMain = styled.main`
  margin: auto;
  padding-top: 1.5rem;
  background-image: url(${Background});
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
`;
