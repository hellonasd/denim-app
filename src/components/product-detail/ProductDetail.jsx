import React from "react";
import { Color } from "../Color/Color.jsx";
import { Btn } from "../Btn/Btn.jsx";

import "../product-detail/productDetail.css";
export const ProductDetail = ({ price, color, size }) => {
  return (
    <div className="detail__main">
      <div className="detail__wrapper">
        <div className="detail__description">
          <p className="detail__description--title">Overalls</p>
          <p className="detail__description--subtitle">
            Overalls in washed organic cotton denim. Collar, button fly, and
            adjustable belt at waist. Chest pockets with flap. Long, gently
            flared sleeves and straight legs with front and back pockets.
          </p>
        </div>
        <div className="detail__color">
          <p className="color__title">Color</p>
          <Color color={color} />
        </div>
        <p className="detail__size">Size</p>
        <div className="detail__size--wrapp">
          {size.map((it) => {
            return (
              <ul key={Math.random() * 10} className="detail__size--list">
                <li key={Math.random() * 10} className="detail__size--name">
                  {it}
                </li>
              </ul>
            );
          })}
        </div>
        <p className="detail__price">{price}</p>

        <Btn subClass="btn--add-card" btnSubstring="Add to cart" />
      </div>
    </div>
  );
};
