import React from 'react';
import glassDetails from './../../glassDetails.js';
import beerPair from './../../pairList.js';

class Details extends React.Component {
  constructor(props){
  	super(props);
  }

  render(){
  	return(
  	  <div>
        {
          this.props.currentBeer.name ? `${glassDetails[beerPair[this.props.currentBeer.type][0]]}` : ''
        }
  	  </div>
  	)
  }
}


export default Details;