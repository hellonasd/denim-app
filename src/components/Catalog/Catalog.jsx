import React from "react";
import { checkPageType } from "../../utils/checkPage.js";
import { mocoData } from '../../moco-data/mocoData.js'
import "./Catalog.css";

export const Catalog = ({ suBclass }) => {
  return (
    <div className="catalog__main">
      <div className="catalog__wrapper">
        <span className="catalog__name">/ Jackets</span>
        <button className="catalog__btn">
          <p className="catalog__btn-name">Filter by</p>
          <img className="catalog__btn-img" src="../../img/btn-open.svg" />
        </button>
        <div className="catalog__items">
          {mocoData.map(item => (
            checkPageType(item, 'catalog')
          ))}
        </div>
      </div>
    </div>
  );
};
