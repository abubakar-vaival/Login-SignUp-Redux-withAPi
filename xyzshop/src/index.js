import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Provider} from 'react-redux';
// import {store} from '../src/Redux/store/store';
import reportWebVitals from "./reportWebVitals";
import {createStore,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import combineReducers from './Redux/reducers/CombineReducers';

const middleware = [thunk,logger];
const store = createStore(combineReducers,applyMiddleware(...middleware));


ReactDOM.render(
  <Provider store = {store}>
  {/* <React.StrictMode> */}
  <App />,
   {/* </React.StrictMode> */}
   </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals();
