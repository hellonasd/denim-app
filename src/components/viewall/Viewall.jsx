import React, { Fragment } from 'react';
import ViewallStyle from '../viewall/viewall.module.css';
export const Viewall = () => {
  return (
    <Fragment>
      <button className={ViewallStyle.link}>View all</button>
    </Fragment>
  )
}