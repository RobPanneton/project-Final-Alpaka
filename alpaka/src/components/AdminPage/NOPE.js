import React from "react";
import styled from "styled-components";

const NOPE = () => {
  return (
    <Wrapper>
      <h1>NOPE</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 350px;
    font-weight: 800;
  }
`;

export default NOPE;
