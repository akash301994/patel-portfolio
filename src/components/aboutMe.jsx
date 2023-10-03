import styled from "@emotion/styled";

const Me = styled.div`
    display: flex;
    justify-content: center;
    height: 50vh;  
         

    & > div {             
        text-align: center; 
    }

    p {
        font-size: 20px;
    }

    h2 {
      font-size: 35px
    }
`;

function AboutMe() {
  return (
    <Me>
      <div>
        <h2>About Me</h2>
        <p>Hi, I'm Akash Patel, a 29-year-old transitioning from being an electrician to a full-stack web developer. i am completely fascinated with coding and creating website. It has been a challenge to say the least learning to code without previous knowledge. The vast amount of information and the creativity have kept me incredibly engaged. In my free time, I enjoy riding my motorcycle, watching football, and going to the gym.</p>
      </div>
    </Me>
  );
}

export default AboutMe;
