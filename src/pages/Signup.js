import styled from "styled-components";
import { MainContentWrapper } from "../components/MainContentWrapper";

const FormWrapper = styled.div`
  background-color: lightblue;
  box-shadow: 3px 6px 4px grey;
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
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.5rem;
  max-width: 200px;
  margin-right: 1.5rem;
`;

const Input = styled.input`
  color: blue;
  min-width: 250px;
  margin-bottom: 0.5rem;
  border: 0.2px solid black;
  min-height: 1.5em;
`;

const Button = styled.button`
  min-height: 85px;
  color: white;
  font-size: 1.5rem;
  background-color: teal;
  border: 0.5px;
  flex: 0.5 0 85px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button:hover {
    color: black;
    background-color: #e75480;
  }

  a:hover {
    color: darkorange;
  }

  a:active {
    color: #e75480;
  }
`;

export default function Signup() {
  const submit = (e) => {
    e.preventDefault();
    console.log(`clicked signup button`);
  };

  return (
    <MainContentWrapper>
      <FormWrapper>
        <h2 style={{ textAlign: "center" }}>Sign up for free</h2>
        <Form>
          <div
            className="text-input-wrapper"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Label htmlFor="username">username:</Label>
            <Input name="username" type="text"></Input>
          </div>
          <div
            className="text-input-wrapper"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Label htmlFor="password">password:</Label>
            <Input name="password" type="password"></Input>
          </div>
          <div
            className="text-input-wrapper"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Label htmlFor="password">confirm password:</Label>
            <Input name="confirm-password" type="password"></Input>
          </div>
        </Form>
        <Wrapper>
          <Button onClick={submit}>Signup</Button>
        </Wrapper>
      </FormWrapper>
    </MainContentWrapper>
  );
}
