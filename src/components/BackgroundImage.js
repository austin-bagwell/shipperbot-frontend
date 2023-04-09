import styled from "styled-components";
import Background from "../assets/background_landscape.jpg";

export const BackgroundImage = styled.div`
  margin: auto;
  background-image: url(${Background});
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
`;
