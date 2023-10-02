import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #333;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  return (
    <NavContainer>
      <NavLink to="/">Home</NavLink>
      <div>
        <NavLink to="/about-me">About Me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact-me">Contact Me</NavLink>
      </div>
    </NavContainer>
  );
}

export default Navbar;