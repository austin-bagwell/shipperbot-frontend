import styled from "styled-components";

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

const FormHeading = styled.h2`
  text-align: center;
`;

// TODO extract button to its own component
const Button = styled.button`
  min-height: 85px;
  color: white;
  font-size: 1.5rem;
  background-color: teal;
  border: 0.5px;
  flex: 0.5 0 85px;
`;

export function AuthForm({ children }) {
  const loginMessage = "Login";
  return (
    <FormWrapper>
      <Form>
        <FormHeader heading={loginMessage}></FormHeader>
        {children}
        <Button
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
