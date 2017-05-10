import React from 'react';
import beerPair from './../../pairList.js';
import glassShopList from './../../glassShopList.js';

class BeerPair extends React.Component {
  constructor(props){
  	super(props);
  }

  render(){
  	return(
  	  <div>
  	    {
					this.props.currentBeer.name ? 
					<div>{this.props.currentBeer.name} is a {this.props.currentBeer.type} and should be drank in a {beerPair[this.props.currentBeer.type][0]}.
						<br/>
						You can get one <a target='_blank' href={glassShopList[beerPair[this.props.currentBeer.type][0]]}>here!</a>
					</div>
					: ''
				}
  	  </div>
  	)
  }
}


export default BeerPair;