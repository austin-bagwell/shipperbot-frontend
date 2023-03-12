import styled from "styled-components";

const FormWrapper = styled.div`
  border: 1px solid red;
  max-width: 500px;
  min-height: 300px;
  padding: 0 1.5rem 1rem 1.5rem;
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
  color: red;
  max-width: 200px;
`;

const Input = styled.input`
  color: blue;
  max-width: 200px;
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  min-height: 85px;
  background-color: teal;
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
`;

export default function Login() {
  const submit = (e) => {
    e.preventDefault();
    console.log(`clicked submit button`);
  };

  return (
    <FormWrapper>
      <h2 style={{ marginBottom: 0, textAlign: "center" }}>
        Log in, you scurrilous cur!
      </h2>
      <Form>
        <Label>Username</Label>
        <Input type="text"></Input>
        <Label>Password</Label>
        <Input type="password"></Input>
      </Form>
      <Wrapper>
        <Button onClick={submit}>CLICK ME</Button>
        <Link a="#">Forgot your password?</Link>
      </Wrapper>
    </FormWrapper>
  );
}
