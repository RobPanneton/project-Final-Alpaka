import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <AboutWrapper>
        <p>
          Founded in 2017, we are an event production company focused on
          providing high quality events in Montreal's underground electronic
          music scene. Producers of Fragments, Collision and Pulsar events.
        </p>
      </AboutWrapper>
      <DividerDiv></DividerDiv>
      <ContactWrapper>
        <form>
          <label>
            Full Name:
            <input type="text" name="name" placeholder="Your Name" />
          </label>
          <label>
            Email
            <input type="text" name="email" placeholder="Your Email" />
          </label>
          <textarea
            name="yourMessage"
            aria-invalid="false"
            placeholder="Your Message"
            rows="10"
            cols="40"
          />
          <input type="submit" name="submitForm" value="Submit Form" />
        </form>
      </ContactWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  padding: 74px 90px 0 90px;
  width: 100%;
  height: 600px;
  text-align: center;
  display: flex;
`;

const AboutWrapper = styled.div`
  width: 40%;

  p {
    color: #eaeaee;
    font-size: 32px;
    line-height: 1.5;
    text-align: left;
  }
`;

const DividerDiv = styled.div`
  width: 20%;
`;

const ContactWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: right;

  input {
    background-color: #eaeaee;
    color: black;
  }

  textarea {
    background-color: #eaeaee;
    color: black;
  }

  form {
    padding-top: 90px;
    display: flex;
    flex-direction: column;
  }
`;

export default About;
