import React from 'react';
import { Products } from '../Products/Products';
import Styles from './Styles.module.css';

export const Bestsellers = () => {
  const [test, setTest] = React.useState([1, 2, 3, 4])
  return (
    <div>
      <h4 className={Styles.title}>Bestsellers</h4>
      {test.map((el, i)=> <Products index={i + 1}/>)}
    </div>
  )
}