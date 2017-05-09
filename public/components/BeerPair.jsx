import React from 'react';
import beerPair from './../../pairList.js';

class BeerPair extends React.Component {
  constructor(props){
  	super(props);
  }

  render(){
  	return(
  	  <div>
  	    {
					this.props.currentBeer.name ? `${this.props.currentBeer.name} is a ${this.props.currentBeer.type} and should be drank in a ${beerPair[this.props.currentBeer.type][0]}` : ''
				}
  	  </div>
  	)
  }
}


export default BeerPair;