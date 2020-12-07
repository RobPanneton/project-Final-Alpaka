import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();

ReactDOM.render(
  <StylesProvider injectFirst>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StylesProvider>,
  document.getElementById("root")
);
