import React, { useState } from 'react';
import { act } from 'react-dom/test-utils';
import {mockData} from '../../mock-data/mock-data.js';


let index = 2;
export const Gallery = () => {
  const [active, setActive] = useState(mockData[index].mobileUrl);
  const [items, setItems] = useState(
    mockData.filter(it => it.mobileUrl !== active)
  );
  console.log(items)

  return (
    <div className="gallery__main">
      <div className="gallery__wrapper">

          <div className="gallery__btn">
            <button  className="btn">
             <img className='gallery__btn--left' />
            </button>
            <img src={active} alt="" className="gallery__img--active"/>
            <button className="btn">
             <img className='gallery__btn--right' />
            </button>
          </div>
          <div className="gallery__items">
            {items.map((it, i)=> {
              return(
                <ul className='gallery__items--list'>
                  <li className='gallery__items--item'>
                    <img src={it.mobileUrl} alt=""/>
                  </li>
                </ul>
              )
            })}
          </div>

      </div>

    </div>
  )
}