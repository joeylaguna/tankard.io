import React         from 'react';
import glassDetails  from './../../glassDetails.js';
import beerPair      from './../../pairList.js';
import Glass         from './Glass.jsx'

const MultipleGlasses = (props) => {
  const handleGlassUpdate = (index) => {
    props.updateGlass(index);
  }

  let temp = props.glasses.slice();
  temp.splice(temp.indexOf(props.currentGlass), 1);
  const list = temp.map((glass, i) => {
    return <Glass key={i} update={handleGlassUpdate} glassName={glass}/>
  });
 
  return (
    <div>
      <p>You can also use a: </p>
      {list}
   </div>
  );
}

export default MultipleGlasses;