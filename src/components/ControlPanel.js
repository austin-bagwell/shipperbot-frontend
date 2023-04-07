import styled from "styled-components";
import { Button } from "./elements/Button";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-auto-rows: auto;
  gap: 1rem; 5rem;
  margin: 2rem 0 2rem 0;
`;

const ButtonStyled = styled(Button)`
  max-width: 150px;
`;

const Fieldset = styled.fieldset`
  display: flex;
  align-items: center;
  border: none;

  & p {
    margin: 0;
    padding-right: 2rem;
  }
`;

export function ControlPanel({ children }) {
  return (
    <Wrapper>
      <input type="text" placeholder="searchbar"></input>
      <ButtonStyled>+ new</ButtonStyled>
      <Fieldset>
        <p>filter by: </p>
        <label htmlFor="id">id</label>
        <input type="radio" name="id"></input>
        <label htmlFor="name">Name</label>
        <input type="radio" name="name"></input>
      </Fieldset>
    </Wrapper>
  );
}
