import React from "react";

import "../Color/color.css";

export const Color = ({ color, find }) => {


  return (
    <React.Fragment>
      {color.map((it) => {
        return (
          <div key={Math.random() * 10} className='radio--color-main'>
            <label 
            key={Math.random() * 10} 
            className="radio"
            // onClick={event=> find(event)}
            >
              <input
                key={Math.random() * 10}
                className="radio--input"
                name="color"
                type="radio"
              />
              <div
                onClick={event=> find(event)}
                key={Math.random() * 10}
                className="radio--radio"
                style={{ backgroundColor: `${it}` }}
                ></div>
              <span
                style={{ border: `2px solid ${it}` }}
                className="radio__active"
              ></span>
            </label>
            
            </div>
        );
      })}
    </React.Fragment>
  );
};
