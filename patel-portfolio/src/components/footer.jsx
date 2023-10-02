import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background-color: #555;
  color: white;
  padding: 1rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>© 2023 Akash Patel</p>
    </FooterContainer>
  );
}

export default Footer;
