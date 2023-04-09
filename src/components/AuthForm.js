import styled from "styled-components";
import { Button } from "./elements/Button";

const FormWrapper = styled.div`
  background-color: lightblue;
  box-shadow: 2px 2px 10px black;
  max-width: 35vw;
  min-height: 300px;
  padding: 2rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Form = styled.form`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-around;
`;

const FormHeading = styled.h2`
  text-align: center;
`;

export function AuthForm({ children }) {
  const loginMessage = "Login";
  return (
    <FormWrapper>
      <Form>
        <FormHeader heading={loginMessage}></FormHeader>
        {children}
        <Button
          positive
          onClick={() => {
            console.log("you clicked the button lol");
          }}
        >
          butt-on
        </Button>
      </Form>
    </FormWrapper>
  );
}

function FormHeader({ heading }) {
  return <FormHeading>{heading}</FormHeading>;
}
