import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <Alpaka>ALPAKA: about page</Alpaka>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 600px;
  text-align: center;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

const Alpaka = styled.h1`
  font-size: 100px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default About;
