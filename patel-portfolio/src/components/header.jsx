import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  background-color: #444;
  color: white;
  padding: 1rem;
  text-align: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <h1>Akash Patel's Portfolio</h1>
    </HeaderContainer>
  );
}

export default Header;
