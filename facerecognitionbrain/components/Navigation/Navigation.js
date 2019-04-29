import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange}) => {
  return(
    <nav>
      <p id = "signout" onClick = {() => onRouteChange('signin')}>Sign Out</p>
    </nav>
  );
}

export default Navigation;
