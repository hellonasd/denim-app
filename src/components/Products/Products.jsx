import React, { Fragment } from 'react';


export const Products = ({ index }) =>{
  return (
    <Fragment>
      <img src={`../../img/model-${index}.jpg`}/>
    </Fragment>
  )
}