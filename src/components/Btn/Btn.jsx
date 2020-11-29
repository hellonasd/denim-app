import React from "react";
import './btn.css';

export const Btn = ({ btnSubstring, subClass, handlerBtn }) => {
  const btnClass = subClass ? subClass : '';
  return (
      <button onClick={handlerBtn} className={`btn ${btnClass}`}>{btnSubstring}</button>
  );
};


