import styled from "styled-components";
import { OverlayStyled } from "./Overlay";
import { AuthForm } from "../AuthForm";

const ModalStyled = styled(AuthForm)`
  z-index: 1001;
`;

export function Modal() {
  return (
    <OverlayStyled>
      <ModalStyled></ModalStyled>
    </OverlayStyled>
  );
}
