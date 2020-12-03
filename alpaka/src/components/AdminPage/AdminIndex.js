import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import AdminNavbar from "./AdminNavbar";
import AdminWelcome from "./AdminWelcome";
// import { COLORS } from "../../constants";
// import { artists } from "./tempdata";

const AdminIndex = () => {
  return (
    <Wrapper>
      <AdminNavbar />
      <TopDiv>
        <h1>Admin Page</h1>
      </TopDiv>
      <AdminContent>
        <Switch>
          <Route exact path="/admin/">
            <AdminWelcome />
          </Route>
        </Switch>
      </AdminContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;

  h1 {
    text-align: center;
  }
`;

const TopDiv = styled.div`
  padding-left: 200px;
  width: 100%;
  height: 100px;
  text-align: left;
  background-color: dodgerblue;
  color: #eaeaee;
  display: flex;
  align-items: center;

  h1 {
    font-size: 32px;
    font-weight: 600;
    padding-left: 52px;
  }
`;

const AdminContent = styled.div`
  padding-left: 200px;
  width: 100%;
  height: auto;
`;

export default AdminIndex;
