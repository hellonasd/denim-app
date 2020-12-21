import React from "react";
import "../Range-slider/rangerSlider.css";

export const RangerSlider = () => {
  const [valueLeft, setValueLeft] = React.useState(25);
  const [valueRight, setValueRight] = React.useState(75);
 
  const left = React.useRef(null);
  const right = React.useRef(null);

  const setLeft = (event) => {
    
    let right = event.target.nextSibling;
    let min = event.target.min;
    let max = event.target.max;
    let value = Math.min(parseInt(event.target.value), parseInt(right.value) - 1);
    let percent = ((value - min) / (max - min)) * 100;
    left.current.style.left = percent + '%';
  }


  const setRight = (event) => {
    let left = event.target.previousElementSibling;
    let min = event.target.min;
    let max = event.target.max;
    let value = Math.max(parseInt(event.target.value), parseInt(left.value) + 1);
    let percent = ((value - min) / (max - min)) * 100;
    console.log(value)
    right.current.style.right = (100 - percent) + '%';

  }
  return (
    <div className="middle">
      <div className="multi-ranger-slider">
        <input
          type="range"
          name="one"
          id="input-left"
          min="0"
          max="100"
          value={valueLeft}
          onInput={(event)=>setLeft(event)}
        />
        <input
          type="range"
          name="one"
          id="input-right"
          min="0"
          max="100"
          value={valueRight}
          onInput={event => setRight(event)}
        />
        <div className="slider">
          <div className="track"></div>
          <div className="range"></div>
          <div ref={left} className="thumb left"></div>
          <div ref={right} className="thumb right"></div>
        </div>
      </div>
    </div>
  );
};
