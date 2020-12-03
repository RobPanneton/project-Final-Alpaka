import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

const AdminArtists = () => {
  return (
    <Wrapper>
      <h1>admin: artists</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.white};
  color: ${COLORS.gray};
`;

export default AdminArtists;
