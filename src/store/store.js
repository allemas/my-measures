import {createStore, combineReducers, applyMiddleware} from 'redux'
import weight from "./weight";



const store = createStore(combineReducers({
    weight
  })
);


export default store;

/*
* https://redux.js.org/basics/store
* https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todomvc?from-embed=&file=/src/components/TodoItem.js:731-771
*
*
* */
