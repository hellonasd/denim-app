import React from "react";

import "../Filter/filter.css";
import { RangerSlider } from "../Range-slider/RangeSlider";

export const Filters = () => {
  const [menu, setMenu] = React.useState("close");
  const [slider, setSlider] = React.useState("");

  React.useEffect(() => {
    if (menu === "open") {
      setSlider(
        <RangerSlider />
      );
    } else {
      setSlider("");
    }
  }, [menu]);

  function changePrice() {
    setMenu(menu === "open" ? "close" : "open");
  }

  return (
    <div className="filter">
      <div className="filter__wrapp">
        <ul className="filters__menu">
          <li className="filter__nav--items">Clear all</li>
          <li className="filter__nav--items">Filters</li>
          <li className="filter__nav--items">Close</li>
        </ul>
        <div className="filter__price">
          <p className="filter__price--price">Price</p>
          <img
            src="../../img/up-down.svg"
            alt="open"
            className={`filter__price--img${menu}`}
            onClick={changePrice}
          />
         
        </div>
        <div className="filter__ranger--slider">{slider}</div>
      </div>
    </div>
  );
};
