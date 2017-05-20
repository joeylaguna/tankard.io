import React        from 'react';
import glassDetails from './../../glassDetails.js';
import beerPair     from './../../pairList.js';

const Details = (props) => {
  return (
    <div>
      {props.updateGlass ? `${glassDetails[props.updateGlass]}` : ''}
    </div>  
  );
}

export default Details;