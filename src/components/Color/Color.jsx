import React from 'react';

import '../Color/color.css';

export const Color = ({color}) => {
  console.log(color)
  return (
    <React.Fragment>
      {color.map(it => {
        return <input key={Math.random() * 10} className="input--color" type="radio" name="color" style={{background : it}}/>
      })}
    </React.Fragment>
  )
}