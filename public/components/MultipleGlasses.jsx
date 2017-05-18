import React from 'react';
import glassDetails from './../../glassDetails.js';
import beerPair from './../../pairList.js';

class MultipleGlasses extends React.Component {
  constructor(props){
  	super(props);
    this.handleGlassUpdate = this.handleGlassUpdate.bind(this);
  }

  handleGlassUpdate(e) {
    e.preventDefault();
    this.props.updateGlass(e.target.innerHTML);
  }

  render(){
    let temp = this.props.glasses.slice();
    temp.splice(temp.indexOf(this.props.currentGlass), 1);
    const list = temp.map((glass, i) => {
      return <li key={i} onClick={this.handleGlassUpdate}>{glass}</li>
    });
    
  	return(
  	  <div>
        <p>You can also use a: </p>
        <ul>
          {list}
        </ul>
  	  </div>
  	)
  }
}


export default MultipleGlasses;