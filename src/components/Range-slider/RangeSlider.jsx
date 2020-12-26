import React from "react";
import "../Range-slider/rangerSlider.css";

export const RangerSlider = () => {
  const [valueLeft, setValueLeft] = React.useState(10);
  const [valueRight, setValueRight] = React.useState(60);

  const [positionLeft, setPositionLeft] = React.useState(
    ((valueLeft - 0) / (240 - 0)) * 100
  );

  const [positionRight, setPositionRight] = React.useState(
    ((valueRight - 0) / (240 - 0)) * 100
  );

  const btnLeft = React.useRef(null);
  const btnRight = React.useRef(null);
  const sliderRef = React.useRef(null);

  function onSetLeft(event) {
    let min = event.target.min;
    let max = event.target.max;
    let value = Math.min(
      parseInt(event.target.value),
      parseInt(event.target.nextSibling.value) - 1
    );

    let percent = ((value - min) / (max - min)) * 100;
    btnLeft.current.style.left = percent + "%";
    sliderRef.current.style.left = percent + "%";
    setPositionLeft(percent);
    setValueLeft(value);
  }

  const onSetRight = (event) => {
    let min = event.target.min;
    let max = event.target.max;
    let value = Math.max(
      parseInt(event.target.value),
      parseInt(event.target.previousElementSibling.value) + 1
    );

    let percent = ((value - min) / (max - min)) * 100;

    btnRight.current.style.right = 100 - percent + "%";
    sliderRef.current.style.right = 100 - percent + "%";
    setPositionRight(percent);
    setValueRight(value);
  };

  return (
    <div className="range">
      <div className="range-wrapper">
        <input
          id="input-range"
          className="input-left"
          type="range"
          min="0"
          max="240"
          onInput={(event) => onSetLeft(event)}
          value={valueLeft}
        />

        <input
          id="input-range-right"
          className="input-right"
          type="range"
          min="0"
          max="240"
          onInput={(event) => onSetRight(event)}
          value={valueRight}
        />
        <div className="push"></div>
        <div className="btn-wrapp">
          <div
            ref={btnLeft}
            className="btn-left"
            style={{ left: `${positionLeft}%` }}
          ></div>
          <div
            ref={btnRight}
            className="btn-right"
            style={{ left: `${positionRight}%` }}
          ></div>
        </div>
        <div className="slider">
          <div className="track"></div>
          <div ref={sliderRef} className="ranger"></div>
        </div>
       
      </div>
      <div className="slider__value">
            <p
              style={{ left: `${positionLeft}%` }}
              className="ranger__slider-price-left"
            >
              $ {valueLeft}
            </p>
            <p
              style={{ left: `${positionRight}%` }}
              className="ranger__slider-price-right"
            >
             $ {valueRight}
            </p>
          </div>
    </div>
  );
};
