import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import  thunkMiddleware  from "redux-thunk";
import { createStore } from "redux";
import App from "./App";
import {composeWithDevTools }from "redux-devtools-extension"
import rootReducer from "./reducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(rootReducer,composedEnhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
