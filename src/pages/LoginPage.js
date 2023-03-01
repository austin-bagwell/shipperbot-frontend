import styled from "styled-components";
import { Navbar } from "../components/Navbar.js";

const PageWrapper = styled.div`
  border: 1px solid red;
`;

const Form = styled.form`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  min-width: auto;
  margin-top: 2rem;
`;

function LoginPage(props) {
  return (
    <PageWrapper>
      <Navbar></Navbar>
      <Form>
        <label for="username">username</label>
        <input type="text" name="username"></input>
        <label for="password">password</label>
        <input type="password" name="password"></input>
      </Form>
    </PageWrapper>
  );
}

export { LoginPage };
