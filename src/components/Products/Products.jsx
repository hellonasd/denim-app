import React from "react";
import { renderItem } from "../../utils/utilFunc.js";
import '../Products/Products.css';
export const Products = ({ mobileRes, tableRes, name, bool, isPrise }) => {
  const price = <p className="product__prise">{isPrise}</p>;

  return (
    <div>
      <figure>
        <picture>
          <source srcSet={tableRes} media="(min-width: 768px)" />
          <img className="product__img" src={mobileRes} />
        </picture>
        <figcaption>
          <p className="product__name">{name}</p>
          {renderItem(bool, price)}
        </figcaption>
      </figure>
    </div>
  );
};
