import React from "react";
import { catalogImg } from '../../mock-data/mock-data.js'

import { Btn } from '../Btn/Btn.jsx';
import { Filters } from "../Filter/Filters.jsx";

import "./Catalog.css";

export const Catalog = ({ suBclass }) => {
  const [menu, setMenu] = React.useState('close');
  const [expanded, setExpanded] = React.useState('');
  
  const openMenu = () => {
    setMenu(menu === "open" ? "close" : "open");
    
    
  }

  React.useEffect(()=>{
    if (menu === "open") {
      setExpanded(
        <Filters openMenu={openMenu}/>
      );
    } else {
      setExpanded("");
    }
  },[menu])
  

  return (
    <div className="catalog__main">
      <div className="catalog__wrapper">
        <span className="catalog__name">/ Jackets</span>
        <button onClick={openMenu} className={`catalog__btn ${menu}`}>
          <p className="catalog__btn-name">Filter by</p>
          <img className="catalog__btn-img" src="../../img/btn-open.svg" />
        </button>
        <div>{expanded}</div>
        <div className="catalog__items">
            {catalogImg.map((it, i)=> {
              return (
              <figure key={i} className='catalog__items-item' >
                <picture>
                  <source media="(min-width:768px)" srcSet={it.tableUrl} />
                  <img className={`catalog__items-img ${it.big}`} src={it.mobileUrl} alt={it.name}/>
                </picture>
                <figcaption>
                  <p className='catalog__items-name'>
                  {it.name}
                  </p>
                  
                  </figcaption>
                <figcaption>
                    <p className='catalog__items-price'>
                    {it.price}
                    </p>
                  </figcaption>
              </figure>
              )
            })}
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
