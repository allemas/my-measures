import React from 'react';
import {Form, Button} from 'react-bootstrap';
import ReactLoading from 'react-loading';
import {connect} from 'react-redux'

import {
  Redirect
} from "react-router-dom";
import {fetch} from "../../api/user";

const axios = require('axios').default;
const jwtDecode = require('jwt-decode');


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      token: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
  }

  handleSubmit(event) {
    const that = this;
    this.setState({...this.state, isLoading: true});

    axios.post('https://localhost:8000/authentication_token', {
      "email": event.target.email.value,
      "password": event.target.password.value
    })
      .then(function (response) {
        that.setState({...that.state, isLoading: false});

        if (response.status === 200) {
          var token = response.data.token;
          localStorage.setItem('MY_MEASURE_AUTH_TOKEN', token);
          if (token != null) {
            var data = jwtDecode(token);
            fetch(data.uid).then(data => {
              var payload = data.data;
              that.props.connectUser({
                token,
                data: payload
              });
            });
          }


        }

      })
      .catch(function (error) {
        that.setState({...that.state, isLoading: false});
        console.log(error);
      });


    event.preventDefault();
  }


  render() {
    return (
      <div className="box">
        {this.props.user.isLoggedIn === true &&
        <Redirect
          to={{
            pathname: "/",
          }}
        />
        }
        <div className="one">
          <div className="logo">
            <h1>My Measures.</h1>
            <h5 className="subtitle">Plan your progress</h5>
          </div>
        </div>
        <div className="two">
          <div className='wrapper-connect'>
            <h2 className="logo">Enfin ! <br/>Nous t'attendions</h2>
            <Form onSubmit={this.handleSubmit} onChange={this.handleChange} className="form">
              <Form.Group controlId="">
                <Form.Control type="text" placeholder="Email" name="email"/>
                <Form.Control type="password" placeholder="Mot de passe" name="password"/>
              </Form.Group>

              {this.state.isLoading === false &&
              <Button variant="primary" type="submit">
                Connexion
              </Button>
              }
              {this.state.isLoading &&
              <ReactLoading type='bars' color="#008DD5" width="30px"/>
              }
            </Form>
          </div>
        </div>
      </div>
    );

  }
}


const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  connectUser: data => dispatch({type: 'CONNECT_USER', user: data})
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

