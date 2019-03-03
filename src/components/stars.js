import React from 'react';
import * as R  from 'ramda';
const Star = ({ likes, dislikes }) => {
  // Make an array with the length 
  // equals to the amount of stars
  const stars = R.range(0, averageFunction(likes, dislikes))
 
	return <div> { stars.map((num, idx) => <i key={idx} className="far fa-star" />)}</div>;
};

export default Star;

// Helper Functions

// Make an Array with length equals to stars number
 
  

// Average formula =>  A = L / (L + D ) * 5
//   => Comment: Multiplied by 5 to have maximum of 5 stars <=



const averageFunction = (likes,dislikes) => Math.round(likes / (likes + dislikes) * 5);

