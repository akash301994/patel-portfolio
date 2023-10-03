import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background-color: #001F3F;
  color: white;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;           
  justify-content: center; t
  align-items: center;    
  height: 60px;            
`;

function Footer() {
  return (
    <FooterContainer>
      <p>© 2023 Akash Patel</p>
    </FooterContainer>
  );
}

export default Footer;

