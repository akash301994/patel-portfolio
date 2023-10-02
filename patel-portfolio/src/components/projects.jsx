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
        <p>A simple 5-day weather forecast</p>
        <a href="https://akash301994.github.io/weather-app/" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
      <div>
        <h3>PlayCare</h3>
        <p>A easy way for daycares to keep track of children</p>
        <a href="https://mysterious-anchorage-56643-889ec0494a37.herokuapp.com/" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
      <div>
        <h3>Project Name</h3>
        <p>Project Description...</p>
        <a href="https://akash301994.github.io/weather-app/" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
      <div>
        <h3>Project Name</h3>
        <p>Project Description...</p>
        <a href="https://akash301994.github.io/weather-app/" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
      
      {/* Add other projects similarly... */}
    </ProjectContainer>
  );
}

export default Projects;
