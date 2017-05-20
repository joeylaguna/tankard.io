import React from 'react';

const QueryArea = (props) => {
  const handleBeerClick = (e) => {
    e.preventDefault();
		const targetBeer = props.beerList[e.target.value];
		props.handleIndividalBeerSearch(targetBeer);
	}
	
	return (
	  <div>
			{
				props.beerList && props.beerList.length > 1 ?
				<div>
					<h4>Did you mean...</h4>
				<ul>
					{props.beerList.map((item, index) => {
						return <li value={index} key={index} onClick={handleBeerClick}>{item['name']}</li>
					})}
				</ul></div> : ''
			}
		</div>
	)
}

export default QueryArea;