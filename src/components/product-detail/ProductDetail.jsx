import React from "react";
import { Color } from "../Color/Color.jsx";

import { Gallery } from "../Gallery/Gallery.jsx";

export const ProductDetail = ({ price, color, size }) => {

  console.log(color)
  console.log(price)
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
        <Color color={color}/>
        <div className='detail__size'>
          {size.map(it => {
            return (
              <ul key={Math.random() * 10} className='detail__size--list'>
                <li key={Math.random() * 10} className='detail__size--name'>
                  {it}
                </li>
              </ul>
            )
          })}
          
        </div>
      </div>
    </div>
  );
};
