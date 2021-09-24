import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store/store"
import { Provider } from "react-redux"

// Provider makes the Redux store available to any nested components that need to access the Redux store.( documentation -> https://react-redux.js.org/api/provider )
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
