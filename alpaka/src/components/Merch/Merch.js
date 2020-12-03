import React from "react";
import styled from "styled-components";

const Merch = () => {
  return (
    <Wrapper>
      <Alpaka>ALPAKA: merch page</Alpaka>
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

export default Merch;
