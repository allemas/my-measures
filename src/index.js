import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './store/store'
/*import Keycloak from 'keycloak-js';



const keycloak = Keycloak('./keycloak.json');

keycloak.init({onLoad: 'login-required'}).then(authenticated => {
  var authenticatedUser = keycloak.idTokenParsed;
  console.log(authenticatedUser);

*/

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </Provider>
  ,
  document.getElementById('root')
)
;

/*}).catch(error => {
  console.log(error)
});
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
