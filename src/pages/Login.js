import styled from "styled-components";

const FormWrapper = styled.div`
  background-color: lightblue;
  box-shadow: 3px 6px 4px grey;
  max-width: 30vw;
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
  min-width: 200px;
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

const Link = styled.a`
  text-decoration: none;
  font-size: 2em;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button:hover {
    color: black;
    background-color: #e75480;
  }
`;

const MainContentWrapper = styled.main`
  margin: auto;
  padding-top: 1.5rem;
`;

export default function Login() {
  const submit = (e) => {
    e.preventDefault();
    console.log(`clicked submit button`);
  };

  return (
    <MainContentWrapper>
      <FormWrapper>
        <h2 style={{ textAlign: "center" }}>Login, you scurrilous curr!</h2>
        <Form>
          <div className="text-input-wrapper" style={{ display: "flexbox" }}>
            <Label htmlFor="username">username:</Label>
            <Input name="username" type="text"></Input>
          </div>
          <div className="text-input-wrapper" style={{ display: "flexbox" }}>
            <Label htmlFor="password">password:</Label>
            <Input name="passowrd" type="password"></Input>
          </div>
        </Form>
        <Wrapper>
          <Button onClick={submit}>Login</Button>
          <Link a="#">Forgot your password?</Link>
        </Wrapper>
      </FormWrapper>
    </MainContentWrapper>
  );
}
