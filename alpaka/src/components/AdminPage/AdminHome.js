import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

const AdminHome = () => {
  return (
    <Wrapper>
      <h1>admin: home</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.white};
  color: ${COLORS.gray};
`;

export default AdminHome;
