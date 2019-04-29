import React from 'react';
import './Register.css'

const Register = ({onRouteChange}) => {
  return(
    <div id = 'registerContainer'>
      <h1>Register</h1>
      <h4>Name</h4>
      <input id = 'name'/> <br/>
      <button id = 'registerButton' onClick = {() => onRouteChange('home')}>Register</button><br/>
    </div>
  )
}

export default Register;
