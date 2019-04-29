import React from 'react';
import './Signin.css'

const Signin = ({onRouteChange}) => {
  return(
    <div id = 'signinContainer'>
      <h1>Sign In</h1>
      <h4>Email</h4>
      <input id = 'email'/>
      <h4>Password</h4>
      <input id = 'password'/> <br/>

      <button id = 'signin' onClick = {() => onRouteChange('home')}>Sign In</button><br/>
      <p onClick = {() => onRouteChange('register')} id = "register">Register</p>
    </div>
  )
}

export default Signin;
