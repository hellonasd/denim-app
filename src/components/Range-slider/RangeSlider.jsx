import React from "react";
import "../Range-slider/rangerSlider.css";

export const RangerSlider = () => {
  const [valueLeft, setValueLeft] = React.useState(0);
  const [valueRight, setValueRight] = React.useState(45);
  
  
  const thumbLeftRef = React.useRef(null);
  const thumbRightRef = React.useRef(null);
  const thumbRangeRef = React.useRef(null);
  const inputLeftRef = React.useRef(null);
  const inputRightRef = React.useRef(null);
  
  React.useEffect(() => {
    
    
  }, [thumbLeftRef, inputLeftRef,thumbRightRef,thumbRangeRef,inputRightRef]);

  const setLeft = () => {
    
    let min = +inputLeftRef.current.min;
    let max = +inputLeftRef.current.max;
    let value = Math.min(+inputLeftRef.current.value, +inputRightRef.current.value - 1);
    let precent = (value - min) / (max - min) * 100;
    console.log(thumbLeftRef.current.style.left)
    
    setValueLeft(thumbLeftRef.current.style.left = precent + '%');
  }

  const setRight = () => {
    let min = +inputLeftRef.current.min;
    let max = +inputLeftRef.current.max;
    let value = Math.max(+inputLeftRef.current.value, +inputRightRef.current.value - 1);
    setValueRight(value);
  }

  return (
    <div className="middle">
      <div className="multi-ranger-slider">
        <input
          type="range"
          name=""
          id="input-left"
          min="0"
          max="100"
          ref={inputLeftRef}
          onInput={setLeft}
          value={valueLeft}
        />
        <input
          type="range"
          name=""
          id="input-right"
          min="0"
          max="100"
          ref={inputRightRef}
          value={valueRight}
        />
        <div className="slider">
          <div className="track"></div>
          <div ref={thumbRangeRef} className="range"></div>
          <div ref={thumbLeftRef} className="thumb left"></div>
          <div ref={thumbRightRef} className="thumb right"></div>
        </div>
      </div>
    </div>
  );
};
