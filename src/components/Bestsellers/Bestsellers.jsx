import React from "react";
import { Products } from "../Products/Products";
import { mocoData } from "../../moco-data/mocoData.js";
import Styles from "./Styles.module.css";
import { Viewall } from "../viewall/Viewall";
export const Bestsellers = () => {
  return (
    <div className={Styles.best__wrapp}>
      <div className={Styles.best__wrapp_vi}>
      <h4 className={Styles.title}>Bestsellers</h4>
        <Viewall />
      </div>
      <div className={Styles.wrap}>
        {mocoData.map((el, i) => (
          <Products
            key={i}
            imgElemMobile={el.mobileUrl}
            imgElemTable={el.tableUrl}
            nameModel={el.name}
            modelPrice={el.price}
          />
        ))}
      </div>
    </div>
  );
};
