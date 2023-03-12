import styled from "styled-components";

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

// Create a Wrapper component that'll render a <section> tag with some styles
const Section = styled.section`
  padding: 4em;
  background: lightgrey;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 350px;
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
  justify-content: space-around;
  flex: 1 1 auto;
`;

const Rectangle = styled.div`
  background-color: red;
  min-height: 150px;
  min-width: 100px;
  max-width: 100px;
`;

// Use Title and Section like any other React component – except they're styled!
export default function Landing() {
  return (
    <main>
      <LightSection>
        <FlexColWrapper>
          <h2>What is shipperBot?</h2>
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
          <Rectangle></Rectangle>
        </FlexColWrapper>
      </LightSection>
      <DarkSection>
        <p>Section text lorem ipsum blah blah blah</p>
      </DarkSection>
      <LightSection>
        <p>Section text lorem ipsum blah blah blah</p>
      </LightSection>
      <h6 style={{ textAlign: "center" }}>*okay not AI, just basic math</h6>
    </main>
  );
}
