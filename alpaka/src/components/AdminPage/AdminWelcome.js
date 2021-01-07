import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

const AdminWelcome = () => {
  return (
    <Wrapper>
      <h1>GIT IT</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 85vh;
  background-color: ${COLORS.white};
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 168px;
    font-weight: 800;
    color: black;
    font-family: "Fira Sans", sans-serif;
  }
`;

export default AdminWelcome;
