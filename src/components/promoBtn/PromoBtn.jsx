import React from 'react';
import BtnStyle from '../promoBtn/PromoBtn.module.css';

export const PromoBtn = ({btnSubstring}) => {
  return (
    <div>
      <button className={BtnStyle.btn}>{btnSubstring}</button>
      </div>
  )
}