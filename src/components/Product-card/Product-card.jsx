import React from 'react';
import { renderItem } from '../../utils/utilFunc';
import { mocoData } from '../../moco-data/mocoData';
import './product-card.css';

export const ProductCard = ({isPrise, subClasses}) => {
  const cardItem = mocoData[0];
  const subClass = subClasses ? subClasses : ``;
  const priceItem = <p className="card__price">{cardItem.price}</p>;

  return(
    <figure className={`card ${subClass}`}>
      <picture>
        <img className="card__img" src={cardItem.mobileUrl} />
      </picture>
      <figcaption className="card__description">
        <h3 className="card__title">{cardItem.name}</h3>
        {renderItem(isPrise, priceItem)}
      </figcaption>
    </figure>
  )
};
