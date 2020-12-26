import React, {useState } from "react";
import { act } from "react-dom/test-utils";
import { ProductDetail } from "../product-detail/ProductDetail.jsx";
import { mockData } from "../../mock-data/mock-data.js";
import "../Gallery/gallery.css";

let index = 2;
export const Gallery = () => {
  const [active, setActive] = useState(mockData[index].mobileUrl);
  const [items, setItems] = useState(
    mockData.filter((it) => it.mobileUrl !== active)
  );

  const onLeft = () => {
    setActive(
      mockData[index - 1 < 0 ? mockData.length - 1 : index - 1].mobileUrl
    );
    index -= 1;
    if (index < 0) {
      index = mockData.length - 1;
      setActive(mockData[mockData.length - 1].mobileUrl);
    }
    setItems(
      mockData.filter((it) => it.mobileUrl !== mockData[index].mobileUrl)
    );
  };

  const onRight = () => {
    
    setActive(
      mockData[index + 1 > mockData.length - 1 ? 0 : index + 1].mobileUrl
    );
    index += 1;
    if (index > mockData.length - 1) {
      index = 0;
      setActive(mockData[0].mobileUrl);
    }
    setItems(
      mockData.filter((it) => it.mobileUrl !== mockData[index].mobileUrl)
    );
  };
  const selectedItem = (event) => {
    const indexOnClicked = mockData.findIndex(
      (it) => it.mobileUrl === event.target.attributes.src.value
    );
    index = indexOnClicked;
    setActive(mockData[index].mobileUrl);
    setItems(mockData.filter((it) => it.mobileUrl !== mockData[index].mobileUrl));
  };

  return (
    <div className="gallery__main">
      <div className="gallery__wrapper">
        <div className="gallery__btn">
          <button onClick={onLeft} className="gallery__btn--left gallery__btn--resolution" >
            <img
              src="../../img/arrow-left.svg"
              className="gallery__btn--left"
              alt='arrow-left-for-slider'
            />
          </button>
          <img src={active} alt="" className="gallery__img--active" />
          <button onClick={onRight} className="gallery__btn--right gallery__btn--resolution">
            <img
              src="../../img/arrow-right.svg"
              className="gallery__btn--right"
              alt='arrow-right-for-slider'
            />
          </button>
        </div>
        <div className="gallery__items">
          {items.map((it, i) => {
            return (
              <ul key={Math.random() * 10} className="gallery__items--list">
                <li key={Math.random() * 10} className="gallery__items--item">
                  <img 
                  onClick={event=> selectedItem(event)} 
                  src={it.mobileUrl} alt="" 
                  className='img__slider img__resolution'
                  
                  />
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <ProductDetail
        price={mockData[index].price}
        color={mockData[0].color}
        size={mockData[0].size}
      />
    </div>
  );
};
