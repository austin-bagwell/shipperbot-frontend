import styled from "styled-components";
import { Button } from "./elements/Button";
import { AutofillSearch } from "./features/AutofillSearch";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(400px, max-content) 1fr;
  grid-template-rows: minmax(50px, min-content) 1fr;
  gap: 1rem;
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

const StyledSearch = styled(AutofillSearch)`
  grid-column: 1;
  grid-row: 1;
`;

export function ControlPanel({ children }) {
  return (
    <Wrapper>
      <AutofillSearch></AutofillSearch>
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
