import React from "react";

import products from "../Products/products.module.css";


export const Products = ({ imgElemMobile, imgElemTable, nameModel, modelPrice }) => {
  return (
    <div className={products.products__wrapper}>

      <picture>
        <source srcSet={imgElemMobile} media='(max-width: 768px)' />
        <img className={products.items__model} alt={nameModel} src={imgElemTable}/>
      </picture>
      <p>{nameModel}</p>
      <p>{modelPrice}</p>
      
    </div>
  );
};
