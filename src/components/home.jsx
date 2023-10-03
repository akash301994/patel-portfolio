import styled from '@emotion/styled';
import profileImg from '../assets/profilepic.jpeg';

const HomeContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 400px; 
  height: 400px; 
  border-radius: 50%; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
  margin-top: 20px; 
  object-fit: cover; 
`;

function Home() {
  return (
    <HomeContainer>
      <h2>Welcome to My Portfolio</h2>
      <ProfileImage src={profileImg} alt="profile pic" />
    </HomeContainer>
  );
}

export default Home;
