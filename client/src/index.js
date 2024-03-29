import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./lib/store";
import * as serviceWorker from "./serviceWorker";

/*
Remaining work:
 - add 'cart item updated' functionality to 'ProductEdit' functionality
   to keep cart items in sync w items in the product list
*/

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
