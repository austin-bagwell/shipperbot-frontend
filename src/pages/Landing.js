import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  display: block;
`;

const CardWrapper = styled.div`
  width: 10rem;
  height: 10rem;
  border: 1px solid red;
  margin: auto;
`;

const Input = styled.input`
  margin: auto;
  margin-bottom: 0.5rem;
  border: 1px solid red;
`;

// Use Title and Wrapper like any other React component – except they're styled!
export function LandingPage() {
  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <CardWrapper>
        <Input></Input>
      </CardWrapper>
    </Wrapper>
  );
}
