import React         from 'react';
import glassDetails  from './../../glassDetails.js';
import beerPair      from './../../pairList.js';

const MultipleGlasses = (props) => {
  const handleGlassUpdate = (e) => {
    e.preventDefault();
    props.updateGlass(e.target.innerHTML);
  }

  let temp = props.glasses.slice();
  temp.splice(temp.indexOf(props.currentGlass), 1);
  const list = temp.map((glass, i) => {
    return <li key={i} onClick={handleGlassUpdate}>{glass}</li>
  });
 
  return (
    <div>
      <p>You can also use a: </p>
      <ul>
        {list}
      </ul>
   </div>
  );
}

export default MultipleGlasses;