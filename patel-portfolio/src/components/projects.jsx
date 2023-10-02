import styled from '@emotion/styled';

const ProjectContainer = styled.div`
  margin: 1rem;
`;

function Projects() {
  return (
    <ProjectContainer>
      <h2>My Projects</h2>
      
      <div>
        <h3>Weather App</h3>
        <p>A simple 5-day weather forecast.</p>
        <a href="https://akash301994.github.io/weather-app/" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
      <div>
        <h3>PlayCare</h3>
        <p>A easy way for daycares to keep track of children.</p>
        <a href="https://mysterious-anchorage-56643-889ec0494a37.herokuapp.com/" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
      <div>
        <h3>Digital Newspaper</h3>
        <p>An easy way to get news from a specific date in time!</p>
        <a href="https://allicris.github.io/digital-newspaper/" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
      <div>
        <h3>Horiseon</h3>
        <p>Marketing Company</p>
        <a href="https://akash301994.github.io/Challenge-1/" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
      
    </ProjectContainer>
  );
}

export default Projects;
