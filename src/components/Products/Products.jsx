import React, { Fragment } from "react";
import { mocoData } from "../../moco-data/mocoData.js";
import products from "../Products/products.module.css";

export const Products = ({ imgElem, nameModel, modelPrice }) => {
  console.log(mocoData[0].mobileUrl);
  return (
    <div className={products.products__wrapper}>
      <img className={products.img} src={imgElem} />
      <span>{nameModel}</span>
      <span>{modelPrice}</span>
    </div>
  );
};
