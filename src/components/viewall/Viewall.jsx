import React, { Fragment } from 'react';
import ViewallStyle from '../viewall/viewall.module.css';
export const Viewall = () => {
  return (
    <Fragment>
      <a className={ViewallStyle.link} href='#'>View all</a>
    </Fragment>
  )
}