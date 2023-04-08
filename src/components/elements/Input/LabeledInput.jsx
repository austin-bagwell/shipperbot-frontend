import styled from "styled-components";

export function LabeledInput({ label, type, name }) {
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type}></Input>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Label = styled.label`
  font-size: 1.5rem;
  max-width: 200px;
  margin-right: 1.5rem;
`;

const Input = styled.input`
  color: blue;
  min-width: 200px;
  margin-bottom: 0.5rem;
  border: 0.2px solid black;
  min-height: 1.5em;
`;
