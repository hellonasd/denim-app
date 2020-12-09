import React from 'react';
import './title.css';

export const Title = ({ titleName, subClass }) => {
  const titleClass = `title ${subClass}`;
  return <h2 className={titleClass}>{titleName}</h2>;
};
