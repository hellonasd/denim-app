import React, { useState } from "react";

import { ProductDetail } from "../product-detail/ProductDetail.jsx";
import { mockData } from "../../mock-data/mock-data.js";
import "../Gallery/gallery.css";

let index = 2;
export const Gallery = (props) => {
  // index = props.match.params.number;
   index = React.useRef(+props.match.params.number);
  
  
  const [active, setActive] = useState(mockData[index.current].mobileUrl);
  const [items, setItems] = useState(
    mockData.filter((it) => it.mobileUrl !== active)
  );

  const onLeft = () => {
    setActive(
      mockData[index.current - 1 < 0 ? mockData.length - 1 : index.current - 1].mobileUrl
    );
    index.current -= 1;
    if (index.current < 0) {
      index.current = mockData.length - 1;
      setActive(mockData[mockData.length - 1].mobileUrl);
    }
    
    setItems(
      mockData.filter((it) => it.mobileUrl !== mockData[index.current].mobileUrl)
    );
  };

  const onRight = () => {
    setActive(
      mockData[index.current + 1 > mockData.length - 1 ? 0 : index.current + 1].mobileUrl
    );
    index.current += 1;
   
    if (index.current > mockData.length - 1) {
      index.current = 0;
      setActive(mockData[0].mobileUrl);
    }
    setItems(
      mockData.filter((it) => it.mobileUrl !== mockData[index.current].mobileUrl)
    );
  };
  const selectedItem = (event) => {
    const indexOnClicked = mockData.findIndex(
      (it) => it.mobileUrl === event.target.attributes.src.value
    );
    index.current = indexOnClicked;
    setActive(mockData[index.current].mobileUrl);
    setItems(
      mockData.filter((it) => it.mobileUrl !== mockData[index.current].mobileUrl)
    );
  };

  return (
    <div className="gallery__main">
      <div className="gallery__wrapper">
        <div className="gallery__btn">
          <button
            onClick={onLeft}
            className="gallery__btn--left gallery__btn--resolution"
          >
            <img
              src="../../img/arrow-left.svg"
              className="gallery__btn--left"
              alt="arrow-left-for-slider"
            />
          </button>
          <img src={active} alt="" className="gallery__img--active" />
          <button
            onClick={onRight}
            className="gallery__btn--right gallery__btn--resolution"
          >
            <img
              src="../../img/arrow-right.svg"
              className="gallery__btn--right"
              alt="arrow-right-for-slider"
            />
          </button>
        </div>
        <div className="gallery__items">
          {items.map((it, i) => {
            return (
              <ul key={Math.random() * 10} className="gallery__items--list">
                <li key={Math.random() * 10} className="gallery__items--item">
                  <img
                    onClick={(event) => selectedItem(event)}
                    src={it.mobileUrl}
                    alt=""
                    className="img__slider img__resolution"
                  />
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <ProductDetail
        price={mockData[index.current].price}
        color={mockData[0].color}
        size={mockData[0].size}
      />
    </div>
  );
};
