import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Store from "./store";

import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={Store.store}>
    <PersistGate loading={null} persistor={Store.persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
