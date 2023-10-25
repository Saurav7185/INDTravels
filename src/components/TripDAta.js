import React from 'react'; // Import React
import './TripStyles.css';
import Price from './Price';
import { Link } from 'react-router-dom';
function TripData(props) {
  return (
    <div className='t-card'>
      <div className='t-image'>
        <img src={props.image} alt="image" /> 
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      
      <Price value={props.value}></Price>
     
    </div>
  );
}

export default TripData;
