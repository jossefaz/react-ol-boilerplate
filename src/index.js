import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import {fetchConfig} from './config/config'

import App from "./containers/App";
import reducers from "./redux/reducers";

const store = createStore(reducers, applyMiddleware(thunk))
const config = fetchConfig()
if (config) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector("#root")
  );  
}
