import React from 'react';
import MulitpleGlasses from './MultipleGlasses.jsx';
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
					<div>{this.props.currentBeer.name} is a {this.props.currentBeer.type} and can be drank in a {this.props.currentGlass}.
						<br/>
						{beerPair[this.props.currentBeer.type].length > 1 ? <MulitpleGlasses updateGlass={this.props.updateGlass} glasses={beerPair[this.props.currentBeer.type]} currentGlass={this.props.currentGlass} /> : ''}
						You can get one <a target='_blank' href={glassShopList[beerPair[this.props.currentBeer.type][0]]}>here!</a>
					</div>
					: ''
				}
  	  </div>
  	)
  }
}


export default BeerPair;