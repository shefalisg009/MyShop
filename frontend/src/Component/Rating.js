import React from 'react';
const Rating = ({value, text,color}) => {
  return (
    <div className='rating'>
       <span style = {{color}}>{value && value}</span>
       <span>{text && text}</span>

    </div>
  );
};

export default Rating;