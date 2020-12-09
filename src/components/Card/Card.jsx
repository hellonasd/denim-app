import React from 'react';
import { renderItem } from '../../utils/utilFunc.js';

export const Card = ({ subClass, isPrice, cardData }) => {
  const {name, imgUrl } = cardData
  const price = isPrice ? cardData.price : undefined;

  const cardClass = `card ${subclass}`;
  const priceItem = price ? `<p>${price}</p>` : undefined;

  return (
    <article className={cardClass}>
      <figure>
        <picture>
          <source media="(min-width: 768px)" srcSet={imgUrl.tablet}/>
          <source media="(min-width: 1366px)" srcSet={imgUrl.desktop}/>
          <img src={imgUrl.mobile} alt="Image of jeans"/>
        </picture>
        <figcaption>
          <h3>{ name }</h3>
          { renderItem(isPrice, priceItem) }
        </figcaption>
      </figure>
    </article>
  );
};
