import styled from "@emotion/styled";
import footballImg from '../assets/football.png';
import motorcycleImg from '../assets/motorcycle.png';
import gymImg from '../assets/gym.png';


const Me = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;   
  & > div {
    text-align: center; 
    width: 60%;         

  p {
    font-size: 20px;
    margin: 20px 0;     
  }

  h2 {
    font-size: 35px;
    margin-bottom: 20px;  
  }

  .images-container {
    display: flex;
    justify-content: space-between; 
    margin-top: 30px;                

    img {
      width: 30%; 
      border-radius: 20px;  
      box-shadow: 0 4px 8px rgba(0,0,0,0.1); 
      &:hover {
        transform: scale(1.05);
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
   
  }
`;

function AboutMe() {
  return (
    <Me>
      <div>
        <h2>About Me</h2>
        <p>Hi, I'm Akash, a 29-year-old transitioning from being an electrician to a full-stack web developer. I am completely fascinated with coding and creating websites. It has been a challenge to say the least-learning to code without prior experience. The vast amount of informational resources and the creativity it requires, have kept me incredibly engaged. In my free time, I enjoy riding my motorcycle, watching football, and going to the gym.</p>

        <div className="images-container">
          <img src={motorcycleImg} alt="Description1" />
          <img src={footballImg} alt="Description2" />
          <img src={gymImg} alt="Description3" />
        </div>
      </div>
    </Me>
  );
}

export default AboutMe;
