import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import AdminAbout from "./AdminAbout";
import AdminArtists from "./AdminArtists";
import AdminEvents from "./AdminEvents";
import AdminHome from "./AdminHome";
import AdminMerch from "./AdminMerch";
import AdminNavbar from "./AdminNavbar";
import AdminReleases from "./AdminReleases";
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
          <Route path="/admin/home">
            <AdminHome />
          </Route>
          <Route path="/admin/events">
            <AdminEvents />
          </Route>
          <Route path="/admin/artists">
            <AdminArtists />
          </Route>
          <Route path="/admin/releases">
            <AdminReleases />
          </Route>
          <Route path="/admin/merch">
            <AdminMerch />
          </Route>
          <Route path="/admin/about">
            <AdminAbout />
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
