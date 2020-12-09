import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../constants";
import AdminAddRelease from "./AdminAddRelease";

const AdminReleases = () => {
  return (
    <Wrapper>
      <Header>
        <h1>Admin: Releases</h1>
      </Header>

      <Divider></Divider>
      <AdminAddRelease />
      <Divider></Divider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.white};
  color: ${COLORS.gray};
`;

const Header = styled.div`
  padding: 18px 24px;

  h1 {
    text-align: left !important;
    font-size: 32px;
  }
`;

const Divider = styled.div`
  width: 100%;
  background-color: ${COLORS.gray};
  height: 4px;
`;

export default AdminReleases;
