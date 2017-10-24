import "react-hot-loader/patch";
import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { basename } from "config";
import configureStore from "store/configure";
import App from "components/App";

const store = configureStore({}, { api: undefined });

const renderApp = () =>
  <Provider store={store}>
    <App />
  </Provider>;

const root = document.getElementById("app");
render(renderApp(), root);

if (module.hot) {
  module.hot.accept("components/App", () => {
    require("components/App");
    render(renderApp(), root);
  });
}
