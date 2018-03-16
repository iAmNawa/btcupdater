import React from 'react';
import './ComponentOne.css';

const componentOne = (props) => {
  return (
    <div>
     <h1>Hello {props.name}!</h1>
    </div>
  )
}

export default componentOne;
