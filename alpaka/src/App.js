import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyles";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Events from "./components/Events/Events";
import Artists from "./components/Artists/Artists";
import Releases from "./components/Releases/Releases";
import ReleasePage from "./components/Releases/ReleasePage";
import Merch from "./components/Merch/Merch";
import About from "./components/About/About";
import AdminPage from "./components/AdminPage/AdminIndex";
import {
  populateAboutContent,
  populateArtistsContent,
  populateReleasesContent,
} from "./actions";

function App() {
  const dispatch = useDispatch();

  const getAboutContent = async () => {
    try {
      const res = await fetch(`/api/about/get-text`);
      const json = await res.json();
      const content = json.data.content;
      dispatch(populateAboutContent(content));
    } catch (error) {
      console.error(error);
      return;
    }
  };

  const getArtistsContent = async () => {
    try {
      const res = await fetch(`/api/artists/get-content`);
      const json = await res.json();
      const content = json.data;
      dispatch(populateArtistsContent(content));
    } catch (error) {
      console.error(error);
    }
  };

  const getReleasesContent = async () => {
    try {
      const res = await fetch(`/api/releases/get-content`);
      const json = await res.json();
      const content = json.data;
      dispatch(populateReleasesContent(content));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAboutContent();
    getArtistsContent();
    getReleasesContent();
  }, []);

  return (
    <>
      <GlobalStyle />

      {window.location.pathname !== "/admin/" &&
        window.location.pathname !== "/admin" &&
        window.location.pathname !== "/admin/home" &&
        window.location.pathname !== "/admin/events" &&
        window.location.pathname !== "/admin/artists" &&
        window.location.pathname !== "/admin/releases" &&
        window.location.pathname !== "/admin/merch" &&
        window.location.pathname !== "/admin/about" && (
          <>
            <Navbar />
          </>
        )}

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/artists">
          <Artists />
        </Route>
        <Route exact path="/releases">
          <Releases />
        </Route>
        <Route path="/releases/:id">
          <ReleasePage />
        </Route>
        <Route path="/merch">
          <Merch />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
      </Switch>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  /* font-size: 52px;
  height: 100vh;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("data:image/png;base64,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"); */
`;

export default App;
