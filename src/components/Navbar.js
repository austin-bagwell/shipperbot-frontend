import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 2rem 0.5rem; 2rem;
  border-bottom: 2px solid black;
`;

const LinkWrapper = styled.ul`
  display: inline-block;

  a {
    color: black;
  }

  a:hover {
    color: darkorange;
  }
`;

const Crumb = styled.li`
  list-style-type: none;
  display: inline-block;
  padding-left: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1rem;
`;

const Logo = styled.h1`
  font-size: 3.5em;
  letter-spacing: 0.07em;
  margin: 0;
`;

// TODO is linkToRoot a good way to make my logo/title bit redirect to / ?
function Navbar() {
  const linkToRoot = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <Nav>
      <Logo onClick={linkToRoot}>shipperBot</Logo>
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
