import {fetch} from "../../api/user";
const jwtDecode = require('jwt-decode');

const checkAuth = (props) => {
  var token = localStorage.getItem("MY_MEASURE_AUTH_TOKEN");

  if (token != null) {
    var data = jwtDecode(token);
    // @todo vérifier signature token

    if (props.user === "")
      fetch(data.uid).then(data => {
        props.connectUser(data);
      });
    return true;
  }

  return false;
}



export default checkAuth;
