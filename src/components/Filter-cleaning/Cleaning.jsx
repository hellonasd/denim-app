import React from 'react';
import '../Filter-cleaning/cleaning.css';

export const Cleaning = ({subClass}) => {
  return (
    <ul className="cleaning">
      <li className={`cleaning-item clear`}>Clear all</li>
      <li className={`cleaning-item filters-all`}>Filters</li>
      <li className={`cleaning-item close`}>Close</li>
    </ul>
  )
}