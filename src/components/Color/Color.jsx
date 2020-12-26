import React from "react";

import "../Color/color.css";

// style={{backgroundColor: it}

export const Color = ({ color }) => {
  return (
    <React.Fragment>
      {color.map((it) => {
        return (
          
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
                style={{ border: `2px solid ${it}` }}
              ></div>
              <span
                className="radio__active"
                style={{ backgroundColor: `${it}` }}
              ></span>
            </label>
          
        );
      })}
    </React.Fragment>
  );
};
