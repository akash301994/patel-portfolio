import styled from '@emotion/styled';
import WeatherAppImg from '../assets/weather-app.jpg';
import PlayCareImg from '../assets/playcare.jpg';
import DigitalNewspaperImg from '../assets/digital-newspaper.jpg';
import HoriseonImg from '../assets/horiseon.png';


const ProjectContainer = styled.div`
  padding: 1rem;
  background-color: #001F3F;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Grid = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  display: grid;
  gap: 1rem;
  align-items: start;
`;


const Project = styled.a`
  display: block;
  padding: 1rem;
  border: 1px solid white;
  border-radius: 5px;
  text-decoration: none;
  min-height: 230px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s;
  color: white;

  &:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.1);
  }
  img {
    width: 100%;     
    max-width: 350px; 
    height: auto;    
    margin: 0 auto;  
    object-fit: cover; 
  }
`;


function Projects() {
  return (
    <ProjectContainer>
      <h2>My Projects</h2>
      
      <Grid>
        <Project href="https://akash301994.github.io/weather-app/" target="_blank" rel="noopener noreferrer">
        <img src={WeatherAppImg} alt="Weather App" />
          <h3>Weather App</h3>
          <p>A simple 5-day weather forecast.</p>
        </Project>
        <Project href="https://mysterious-anchorage-56643-889ec0494a37.herokuapp.com/" target="_blank" rel="noopener noreferrer">
        <img src={PlayCareImg} alt="Weather App" />
          <h3>PlayCare</h3>
          <p>A easy way for daycares to keep track of children.</p>
        </Project>
        <Project href="https://allicris.github.io/digital-newspaper/" target="_blank" rel="noopener noreferrer">
        <img src={DigitalNewspaperImg} alt="Weather App" />
          <h3>Digital Newspaper</h3>
          <p>An easy way to get news from a specific date in time!</p>
        </Project>
        <Project href="https://akash301994.github.io/Challenge-1/" target="_blank" rel="noopener noreferrer">
        <img src={HoriseonImg} alt="Weather App" />
          <h3>Horiseon</h3>
          <p>Marketing Company</p>
        </Project>
      </Grid>
    </ProjectContainer>
  );
}

export default Projects;
