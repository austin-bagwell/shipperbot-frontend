import styled from "styled-components";

// Create a Wrapper component that'll render a <section> tag with some styles
const Section = styled.section`
  padding: 4em;
  background: lightgrey;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 250px;
  column-gap: 2rem;
  text-align: center;
`;

const LightSection = styled(Section)`
  background: white;
`;

const DarkSection = styled(Section)`
  background: darkgrey;
`;

const FlexColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  flex: 1 1 auto;
  inline-size: max-content;
`;

const Square = styled.div`
  background-color: red;
  min-height: 200px;
  min-width: 200px;
  max-width: 200px;
`;

// Use Title and Section like any other React component – except they're styled!
export default function Landing() {
  return (
    <main>
      <LightSection>
        <FlexColWrapper>
          <h2 style={{ fontSize: "60px" }}>What is shipperBot?</h2>
          <p>
            shipperBot is designed to help schedule shipments for on-time
            arrival.
          </p>
          <p>
            Feed shipperBot a due date, and its advanced AI-powered algorithm*
            will tell you when the order should ship.
          </p>
        </FlexColWrapper>
        <FlexColWrapper>
          <Square></Square>
        </FlexColWrapper>
      </LightSection>
      <DarkSection>
        <FlexColWrapper>
          <Square></Square>
        </FlexColWrapper>
        <FlexColWrapper>
          <p>Section text lorem ipsum blah blah blah</p>
        </FlexColWrapper>
      </DarkSection>
      <LightSection>
        <FlexColWrapper>
          <p>Section text lorem ipsum blah blah blah</p>
        </FlexColWrapper>
        <FlexColWrapper>
          <Square></Square>
        </FlexColWrapper>
      </LightSection>
      <h6 style={{ textAlign: "center" }}>*okay not AI, just basic math</h6>
    </main>
  );
}
