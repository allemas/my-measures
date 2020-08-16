import {createStore, combineReducers, applyMiddleware} from 'redux'
import weight from "./weight";

import {logger} from 'redux-logger'
import {fetch} from '../api/weight';

const reduxthunk = require("redux-thunk").default;



const store = createStore(
  weight,
  applyMiddleware(logger, reduxthunk),
);


export default store;


/*
* https://redux.js.org/basics/store
* https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todomvc?from-embed=&file=/src/components/TodoItem.js:731-771
*
*
* */
