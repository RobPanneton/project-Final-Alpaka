import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { COLORS } from "../../constants";

const About = () => {
  const aboutText = useSelector((state) => state?.content?.about);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      {aboutText ? (
        <>
          <AboutWrapper>
            <p>{aboutText}</p>
          </AboutWrapper>
          <DividerDiv></DividerDiv>
          <ContactWrapper>
            <h1>Reach Out!</h1>
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
        </>
      ) : (
        <>
          <h1>loading...</h1>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  padding: 174px 120px 0px 120px;
  width: 100%;
  height: 626px;
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

  h1 {
    color: ${COLORS.white};
    font-size: 24px;
    text-align: right;
    padding-bottom: 4px;
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
