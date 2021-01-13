import React from "react";

import "../Color/color.css";

// style={{backgroundColor: it}

export const Color = ({ color }) => {

  return (
    <React.Fragment>
      {color.map((it) => {
        return (
          <div className='radio--color-main'>
            <label key={Math.random() * 10} className="radio">
              <input
                key={Math.random() * 10}
                className="radio--input"
                name="color"
                type="radio"
              />
              <div
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
