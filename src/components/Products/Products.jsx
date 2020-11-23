import React, { Fragment } from "react";
import { mocoData } from "../../moco-data/mocoData.js";
import products from "../Products/products.module.css";

export const Products = ({ imgElem, nameModel, modelPrice }) => {
  return (
    <div className={products.products__wrapper}>
      <li className={products.items__model}>
        <img className={products.img} src={imgElem} />
      </li>
      <p>{nameModel}</p>
      <p>{modelPrice}</p>
    </div>
  );
};
