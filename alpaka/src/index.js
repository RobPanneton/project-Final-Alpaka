import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

ReactDOM.render(
  <StylesProvider injectFirst>
    <Router>
      <App />
    </Router>
  </StylesProvider>,
  document.getElementById("root")
);
