import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

const Footer = () => {
  return (
    <Wrapper>
      <p>this is a footer</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: black;
  color: ${COLORS.white};
`;

export default Footer;
