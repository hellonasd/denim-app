import React from "react";

import "../Color/color.css";

export const Color = ({ color, find, isActive }) => {
  const [colorId, setColorId] = React.useState('');
  return (
    <React.Fragment>
      <div className="color-main">
        {color.map((it, i) => {
          
          return (
            <div key={Math.random() * 5} className="color-main-wrapp">
              <label 
              className="radio" 
              style={{ backgroundColor: `${it}` }}
              >
                <input
                id={i} 
                type="radio" 
                className="radio-inpute" 
                name="radio"
                checked={it === colorId}
                onChange={(event)=>find(event, setColorId, it)}
                />
                <div
                  className="checkmark"
                  style={{ border: `2px solid ${it}` }}
                ></div>
              </label>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
