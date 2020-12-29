import React from "react";

// import { mocoData } from '../../moco-data/mocoData.js'
import { Btn } from '../Btn/Btn.jsx';

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
          {/* {mocoData.map(item => (
            checkPageType(item, 'catalog')
          ))}  */}
        </div>
          <div className='catalog__all-items' >
            <p className='catalog__all--text'>
            Showing 9 of 45 items
            </p>
          </div>
          <Btn btnSubstring='Load more' subClass='catalog--btn'/>
      </div>
    </div>
  );
};
