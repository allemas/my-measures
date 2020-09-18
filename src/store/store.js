import {createStore, combineReducers, applyMiddleware} from 'redux'
import weight from "./weight";
import user from "./user";
import balanceSheet from "./balanceSheet";

import {logger} from 'redux-logger'
import {fetch} from '../api/weight';

const reduxthunk = require("redux-thunk").default;

const stores = combineReducers({
  weight,
  user,
  balanceSheet
});

const store = createStore(stores,
  applyMiddleware(logger, reduxthunk),
);


export default store;


/*
* https://redux.js.org/basics/store
* https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todomvc?from-embed=&file=/src/components/TodoItem.js:731-771
*
*
* */
