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
          <Input type="text" name="name" placeholder="Your Name" />

          <Input type="text" name="email" placeholder="Your Email" />
          <textarea
            name="yourMessage"
            aria-invalid="false"
            placeholder="Your Message"
            rows="10"
            cols="40"
          />
          <Submit type="submit" name="submitForm" value="Submit Form" />
        </form>
      </ContactWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  padding: 174px 120px 0 120px;
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

  textarea {
    background-color: #eaeaee;
    color: black;
    margin-top: 24px;
    padding: 6px 6px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const Input = styled.input`
  background-color: #eaeaee;
  color: black;
  margin-top: 12px;
  width: 260px;
  padding: 6px 6px;
`;

const Submit = styled.input`
  text-align: center;
  margin-top: 24px;
  padding: 6px 12px;
  background-color: #eaeaee;
  font-weight: 600;
  border: none;

  input {
    margin-top: 24px;
  }
`;

export default About;
