import React, { useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    padding: 20px;
`;

const ContactForm = styled.form`
    color: white;
    
    padding: 40px;
    border-radius: 5px;
    width: 100%;
    max-width: 400px; 

    div {
        margin-bottom: 40px;
    }

    label {
        display: block;
        margin-bottom: 10px;
        color: white;
        
    }

    input, textarea {
        width: 100%;
        padding: 10px;
        border: 3px solid #ccc;
        border-radius: 10px;
    }

    button {
        padding: 10px 20px;
        border: none;
        background-color: #007BFF; 
        color: #ffffff; 
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: #0056b3;
        }
    }
`;

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.message.length > 300) {
      alert('Message exceeds the 300 character limit.');
      return;
    }

    console.log('Sending message:', formData);
    setMessageSent(true);
  }

  return (
    <Container>
      <h2>Contact Me</h2>
      <p>You can reach me via email at <a href="mailto:patel.akash30@icloud.com">patel.akash30@icloud.com</a>.</p>

      {messageSent ? (
        <p>Thank you for your message!</p>
      ) : (
        <ContactForm onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Message (300 characters max):</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              maxLength="300"
              required
            />
          </div>
          <button type="submit">Send</button>
        </ContactForm>
      )}
    </Container>
  );
}

export default ContactMe;
