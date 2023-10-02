import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #001F3F; /* Navy Blue */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const NavLinkGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

function Navbar() {
  return (
    <NavContainer>
      <NavLink to="/">Home</NavLink>
      <NavLinkGroup>
        <NavLink to="/about-me">About Me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact-me">Contact Me</NavLink>
      </NavLinkGroup>
    </NavContainer>
  );
}

export default Navbar;
