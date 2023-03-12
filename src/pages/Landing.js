import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: lightgrey;
  display: block;
  text-align: center;
`;

// Use Title and Wrapper like any other React component – except they're styled!
export default function Landing() {
  return (
    <main>
      <Title>Welcome to shipperBot!</Title>
      <Wrapper>
        <h2>What is shipperBot?</h2>
        <p>
          shipperBot is designed to help schedule shipments for on-time arrival.
        </p>
        <p>
          Feed shipperBot a due date, and its advanced AI-powered algorithm*
          will tell you when the order should ship.
        </p>
      </Wrapper>
      <h6 style={{ textAlign: "center" }}>*okay not AI, just basic math</h6>
    </main>
  );
}
