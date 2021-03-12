import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import RouterApp from "./router";
import store from "./store/store";
import packageJson from '../package.json';

var meta = document.createElement('meta');
meta.name = "version";
meta.content = packageJson.version
document.getElementsByTagName('head')[0].appendChild(meta);
var meta = document.createElement('meta');


render(
  <Provider store={store}>
    <RouterApp />
  </Provider>,
  document.getElementById("root")
);

