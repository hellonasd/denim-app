import React from "react";

import { PromoBtn } from "../promoBtn/PromoBtn.jsx";

import PromoStyle from "../promo/Promo.module.css";

export const Promo = () => {
  return (
    <div className={PromoStyle.promo__wrapper}>
      <div className={PromoStyle.promoBg}>
        <picture>
          <source srcSet='../../img/new-collection-mobile.jpg' media='(max-width: 768px)'/>
          <img className={PromoStyle.promo__img} src="../../img/new-collection-tablet.jpg" alt=""/>
        </picture>
        <div className={PromoStyle.promo__title}>Street fashion collection</div>
        <p className={PromoStyle.promo__subtitle}>Fall 2019</p>
        <PromoBtn btnSubstring="Shop now" />
      </div>
    </div>
  );
};
