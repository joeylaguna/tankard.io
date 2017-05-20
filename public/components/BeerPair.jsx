import React from 'react';
import MulitpleGlasses from './MultipleGlasses.jsx';
import beerPair from './../../pairList.js';
import glassShopList from './../../glassShopList.js';

const BeerPair = (props) => {
  console.log('here');
  return (
    <div>
	  {
	    props.currentBeer.name ? 
		  <div>
			{props.currentBeer.name} is a {props.currentBeer.type} and can be drank in a {props.currentGlass}.
			<br/>
			{beerPair[props.currentBeer.type].length > 1 ? <MulitpleGlasses updateGlass={props.updateGlass} glasses={beerPair[props.currentBeer.type]} currentGlass={props.currentGlass} /> : ''}
			You can get one <a target='_blank' href={glassShopList[props.currentGlass]}>here!</a>
		  </div>
		: ''
	  }
	  </div>
  );
}

export default BeerPair;