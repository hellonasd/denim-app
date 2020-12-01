import React from "react";

import { Btn } from "../Btn/Btn.jsx";
import { promoTemp } from "../../moco-data/mocoData.js";

import PromoStyle from "../promo/Promo.module.css";

export const Promo = () => {
  const { description, title, url } = promoTemp;

  return (
    <div className={PromoStyle.promo__wrapper}>
      <div className={PromoStyle.promoBg}>
        <picture>
          <source
            className={PromoStyle.promo__mobImg}
            srcSet={url.tablet}
            media="(min-width: 768px)"
          />
          <img className={PromoStyle.promo__img} src={url.mobile} alt="" />
        </picture>
        <div className={PromoStyle.promo__wrapper__title}>
          <div className={PromoStyle.promo__title}>
            {description}
          </div>
          <p className={PromoStyle.promo__subtitle}>{title}</p>
          <Btn btnSubstring="Shop now" subClass={`btn--promo`} />
        </div>
      </div>
    </div>
  );
};
