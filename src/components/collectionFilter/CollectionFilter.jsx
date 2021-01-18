import React from 'react';

import '../collectionFilter/collectionFilter.css';
export const CollectionList = ({ filterModelItems }) => {
  return (
    <ul onClick={filterModelItems} className='collection'>
      <li className={`collection-item`}>Casual</li>
      <li className='collection-item active'>Petite</li>
      <li className='collection-item'>Classic</li>
      <li className='collection-item'>Soulluxe</li>
    </ul>
  )
}