import React from "react";
import { Viewall } from "../viewall/Viewall.jsx";
import { mocoData } from "../../moco-data/mocoData.js";
import { checkPageType } from '../../utils/checkPage.js'
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
          checkPageType(item, 'firstpage')
        ))}
      </div>
    </div>
  );
};
