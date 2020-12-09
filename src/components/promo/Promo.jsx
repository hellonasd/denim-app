import React from "react";
import { Btn } from "../Btn/Btn.jsx";
import { promoTemp } from "../../mock-data/mock-data.js";
import "../promo/Promo.css";

export const Promo = () => {
  return (
    <div className="promo__main">
      <div className="promo__wrapper">
        <picture>
          <source srcSet={promoTemp.url.dcversion} media="(min-width: 1366px)" />
          <source srcSet={promoTemp.url.tablet} media="(min-width: 768px)" />
          <img className="promo__img" src={promoTemp.url.mobile} alt='name' />
        </picture>

        <div className="promo__collection">
          <div className="promo__background">
            <p className="promo__description">{promoTemp.description}</p>
            <h1 className="promo__title">{promoTemp.title}</h1>
            <Btn subClass="btn--promo" btnSubstring="Shop now" />
          </div>
        </div>
      </div>
    </div>
  );
};
