import React from "react";
import styled from "styled-components";
import logo from "./assets/alpakamuzik-logo.jpg";

const Loader = () => {
  return (
    <Wrapper>
      <Logo src={logo} alt="AlpaKaMuZiK Logo"></Logo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Logo = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  animation: rotating 2.3s linear infinite;

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
