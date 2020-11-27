import React from "react";

import { PromoBtn } from "../promoBtn/PromoBtn.jsx";

import PromoStyle from "../promo/Promo.module.css";

export const Promo = () => {
  return (
    <div className={PromoStyle.promo__wrapper}>
      <div className={PromoStyle.promoBg}>
        <div className={PromoStyle.promo__title}>Street fashion collection</div>
        <p className={PromoStyle.promo__subtitle}>Fall 2019</p>
        <PromoBtn btnSubstring="Shop now" />
      </div>
    </div>
  );
};
