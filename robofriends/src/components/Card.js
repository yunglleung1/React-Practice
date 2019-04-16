// import React, { Component } from 'react';
import React from 'react';
import './card.css'
// class Card extends Component {
//   render(){
//     return(
//       <h1>Test</h1>
//     );
//   }
// }

const Card = (props) => {
  const {id, name, email} = props.bot;//destructuring
  return(
    <div className = "card">
      <img src = {`https://robohash.org/${id}?size=200x200`} alt = 'Robot Pic'/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
