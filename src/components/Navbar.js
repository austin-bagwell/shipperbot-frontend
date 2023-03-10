import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem 1rem; 2rem;
  margin-bottom: 3rem;
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

const Link = styled.a`
  text-decoration: none;
  font-size: large;
  color: blue;
`;

const Button = styled.button`
  background: blue;
  color: white;
  border-radius: 3px;
`;

function Navbar(props) {
  return (
    <Nav>
      <Button>Mock Logo</Button>
      <LinkWrapper>
        <Crumb href="#">
          <Link href="#">Login</Link>
        </Crumb>
        <Crumb href="#">
          <Link href="#">Signup</Link>
        </Crumb>
        <Crumb href="#">
          <Link href="#">About</Link>
        </Crumb>
      </LinkWrapper>
    </Nav>
  );
}

export { Navbar };
