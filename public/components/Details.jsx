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
        {this.props.updateGlass ? `${glassDetails[this.props.updateGlass]}` : ''}
  	  </div>
  	)
  }
}


export default Details;