import React from "react";
import { Viewall } from "../viewall/Viewall.jsx";
import { Title } from '../Title/Title';
import { mockData } from "../../mock-data/mock-data.js";
import { checkPageType } from '../../utils/checkPage.js'
import "../Bestsellers/Bestsellers.css";


export const Bestsellers = () => {

  
  return (
    <div className="bestsellers__main">
      
      <div className="bestsellers__wrapper">
      <div className="bestsellers__title-wrapper">
        <Title titleName={`Bestsellers`} subClass={``}/>
        <Viewall />
      </div>
        {mockData.map((item, i) => (
          checkPageType(item, 'firstpage')
        ))}
      </div>
    </div>
  );
};
