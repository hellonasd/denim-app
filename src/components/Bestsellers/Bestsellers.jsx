import React from "react";
import { Viewall } from "../viewall/Viewall.jsx";
import { mocoData } from "../../moco-data/mocoData.js";

import { Products } from '../Products/Products.jsx';

import "../Bestsellers/Bestsellers.css";


export const Bestsellers = () => {

  
  return (
    <div className="bestsellers__main">
      
      <div className="bestsellers__wrapper">
      <div className="bestsellers__title-wrapper">
        <h1 className="bestsellers__title">Bestsellers</h1>
        <Viewall />
      </div>
        {mocoData.map((item, i) => (
          <Products
          key={Math.random() * 10}
          mobileRes={item.mobileUrl}
          tableRes={item.tableUrl}
          dcRes={item.dcUrl}
          name={item.name}
          
          isPrise={item.price}
          bool={true}
         />
        ))}
      </div>
    </div>
  );
};
