import {createStore, combineReducers, applyMiddleware} from 'redux'
import weight from "./weight";
import user from "./user";
import balanceSheet from "./balanceSheet";
import training from "./training";

import {createLogger} from 'redux-logger'

const logger = createLogger({
  diff: true,
});

const stores = combineReducers({
  weight,
  user,
  training,
  balanceSheet
});

const store = createStore(stores,
  applyMiddleware(logger),
);


export default store;


/*
* https://redux.js.org/basics/store
* https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todomvc?from-embed=&file=/src/components/TodoItem.js:731-771
*
*
* */
