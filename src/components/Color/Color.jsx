import React from 'react';

import '../Color/color.css';


const inputStyle = {
  filter: 'grayscale(.5)',
  backgroun : 'red'
};

export const Color = ({color}) => {
  
  return (
    <React.Fragment>
      {color.map(it => {
        return <input 
        key={Math.random() * 10} 
        className="input--color" 
        type="radio"
         name="color"
        //  style={{filter: `${grayscale(1)}`}}
         style={inputStyle}
         />
      })}
    </React.Fragment>
  )
}