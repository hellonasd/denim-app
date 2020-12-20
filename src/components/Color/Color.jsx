import React from 'react';

import '../Color/color.css';


// style={{backgroundColor: it}


export const Color = ({color}) => {
  
  return (
    <React.Fragment>
      {color.map(it => {
        return (
          <label className='radio' >
            <input className='radio--input' name='color' type='radio' />
            <div className='radio--radio'
            style={{border: `2px solid ${it}`,
            backgroundColor:`${it}`}} ></div>
          </label>
        )
      })}
      
    </React.Fragment>
  )
}