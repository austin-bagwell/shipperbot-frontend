import styled from "styled-components";

const Input = styled.input`
  line-height: 1.5;
  height: 2rem;
`;

export function AutofillSearch() {
  return <Input type="text" placeholder="type to search"></Input>;
}
