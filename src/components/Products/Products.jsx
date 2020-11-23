import React from "react";

import products from "../Products/products.module.css";

export const Products = ({ imgElem, nameModel, modelPrice }) => {
  return (
    <div className={products.products__wrapper}>
      <li className={products.items__model}>
        <img className={products.img} src={imgElem} alt='da'/>
      </li>
      <p>{nameModel}</p>
      <p>{modelPrice}</p>
    </div>
  );
};
