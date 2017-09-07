import React  from 'react';

const Glass = (props) => {
 
  const handleClick = () => {
    props.update(props.glassName);
  }
  
  return (
    <div onClick={handleClick}>
      {props.glassName}
   </div>
  );
}

export default Glass;