import React from "react";
import { renderItem } from "../../utils/utilFunc.js";
import "../Products/Products.css";
export const Products = ({
  subClass,
  mobileRes,
  tableRes,
  name,
  bool,
  isPrise,
  dcRes,
}) => {
  const price = <p className="product__prise">{isPrise}</p>;
  const imgView = (
    <img className={`product__img ${subClass}`} src={mobileRes} alt={name}/>
  );

  return (
    <figure>
        <picture>
          <source srcSet={tableRes} media="(min-width: 768px)"/>
          <source srcSet={dcRes} media="(min-width: 1366px)" />
          {imgView}
        </picture>
        <figcaption>
          <p className="product__name">{name}</p>
          {renderItem(bool, price)}
        </figcaption>
      </figure>
  );
};
