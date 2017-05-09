import React from 'react';

class QueryArea extends React.Component {
  constructor(props){
  	super(props);
		this.handleBeerClick = this.handleBeerClick.bind(this);
  }

	handleBeerClick(e) {
	  e.preventDefault();
		const targetBeer = this.props.beerList[e.target.key];
		this.props.handleIndividalBeerSearch(targetBeer);
	}

  render(){
  	return(
  	  <div>
  	    {
				  this.props.beerList && this.props.beerList.length > 1 ?
					<div>
						<h4>Did you mean...</h4>
					<ul>
					  {this.props.beerList.map((item, index) => {
						  return <li key={index} onClick={this.handleBeerClick}>{item['name']}</li>
					  })}
					</ul></div> : ''
				}
  	  </div>
  	)
  }
}


export default QueryArea;