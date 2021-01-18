import React from "react";
import { catalogImg } from "../../mock-data/mock-data.js";

import { Btn } from "../Btn/Btn.jsx";


import "./Catalog.css";


export const Catalog = ({ suBclass, array }) => {
  
  return (
    <div className="catalog__main">
      <div className="catalog__wrapper">
        

        <div className="catalog__items">
          {array.length
            ? array.map((it, i) => {
                return (
                  <figure key={i} className="catalog__items-item">
                    <picture>
                      <source media="(min-width:768px)" srcSet={it.tableUrl} />
                      <img
                        className={`catalog__items-img ${it.big}`}
                        src={it.mobileUrl}
                        alt={it.name}
                      />
                    </picture>
                    <figcaption>
                      <p className="catalog__items-name">{it.name}</p>
                    </figcaption>
                    <figcaption>
                      <p className="catalog__items-price">$ {it.price}</p>
                    </figcaption>
                  </figure>
                );
              })
            : catalogImg.map((it, i) => {
                return (
                  <figure key={i} className="catalog__items-item">
                    <picture>
                      <source media="(min-width:768px)" srcSet={it.tableUrl} />
                      <img
                        className={`catalog__items-img ${it.big}`}
                        src={it.mobileUrl}
                        alt={it.name}
                      />
                    </picture>
                    <figcaption>
                      <p className="catalog__items-name">{it.name}</p>
                    </figcaption>
                    <figcaption>
                      <p className="catalog__items-price">$ {it.price}</p>
                    </figcaption>
                  </figure>
                );
              })}
        </div>
        <div className="catalog__all-items">
          <p className="catalog__all--text">Showing 9 of 45 items</p>
        </div>
        <Btn btnSubstring="Load more" subClass="catalog--btn" />
      </div>
    </div>
  );
};
