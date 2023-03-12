import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem 1rem; 2rem;
  border-bottom: 2px solid black;
`;

const LinkWrapper = styled.ul`
  display: inline-block;
`;

const Crumb = styled.li`
  list-style-type: none;
  display: inline-block;
  padding-left: 1rem;
`;

const Button = styled.button`
  background: blue;
  color: white;
  border-radius: 3px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin: 1rem;
`;

function Navbar(props) {
  return (
    <Nav>
      <Button>Mock Logo</Button>
      <LinkWrapper>
        <Crumb>
          <StyledLink to="/login">Login</StyledLink>
        </Crumb>
        <Crumb>
          <StyledLink to="/signup">Signup</StyledLink>
        </Crumb>
        <Crumb>
          <StyledLink to="/about">About</StyledLink>
        </Crumb>
      </LinkWrapper>
    </Nav>
  );
}

export { Navbar };
