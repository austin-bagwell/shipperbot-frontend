import styled from "styled-components";
import { Button } from "./elements/Button";
import { AutofillSearch } from "./features/AutofillSearch";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 0.5rem 0;
`;

const CenteredWrap = styled(Wrapper)`
  align-items: center;
  margin-botton: 0;
  padding-bottom: 0;
`;

const ButtonStyled = styled(Button)`
  font-size: 1.5rem;
  padding: 1rem;
  width: 40%;
`;

const Fieldset = styled.fieldset`
  display: flex;
  align-items: flex-end;
  border: none;
  padding-left: 0;

  & label:not(:first-child) {
    margin-left: 2rem;
  }
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
`;

const Input = styled.input`
  cursor: pointer;
`;

export function ControlPanel() {
  return (
    <>
      <CenteredWrap>
        <ButtonStyled>+ new</ButtonStyled>
      </CenteredWrap>
      <Wrapper>
        <AutofillSearch></AutofillSearch>
        <Fieldset>
          <Label htmlFor="id">ID</Label>
          <Input type="radio" name="id"></Input>
          <Label htmlFor="name">Name</Label>
          <Input type="radio" name="name"></Input>
          <Label htmlFor="transit-time">Transit Time</Label>
          <Input type="radio" name="transit-time"></Input>
        </Fieldset>
      </Wrapper>
    </>
  );
}
