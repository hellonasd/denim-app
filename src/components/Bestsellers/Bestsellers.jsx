import React from "react";
import { Products } from "../Products/Products";
import { mocoData } from "../../moco-data/mocoData.js";
import Styles from "./Styles.module.css";
import { Viewall } from "../viewall/Viewall";
export const Bestsellers = () => {
  return (
    <div>
      <h4 className={Styles.title}>Bestsellers</h4>
      <div className={Styles.wrap}>
        {mocoData.map((el, i) => (
          <Products
            key={i}
            imgElem={el.mobileUrl}
            nameModel={el.name}
            modelPrice={el.price}
          />
        ))}
        <Viewall />
      </div>
    </div>
  );
};
