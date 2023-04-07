import styled from "styled-components";

const Input = styled.input`
  padding: 0.25rem;
  line-height: 1.5;
  font-size: 1.5rem;
  height: 2rem;
`;

export function AutofillSearch() {
  return <Input type="text" placeholder="type to search"></Input>;
}
