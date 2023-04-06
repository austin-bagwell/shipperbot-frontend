import styled from "styled-components";
import { MainContentWrapper } from "../components/wrappers/flexWrappers";
import { AuthForm } from "../components/AuthForm";

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

export default function Login() {
  return (
    <MainContentWrapper>
      <AuthForm>
        <div
          className="text-input-wrapper"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Label htmlFor="username">username:</Label>
          <Input name="username" type="text"></Input>
        </div>
        <div
          className="text-input-wrapper"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Label htmlFor="password">password:</Label>
          <Input name="password" type="password"></Input>
        </div>
      </AuthForm>
    </MainContentWrapper>
  );
}
