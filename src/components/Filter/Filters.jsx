import React from "react";
import { Color } from "../Color/Color";
import { colors } from '../../mock-data/mock-data.js';
import "../Filter/filter.css";
import { RangerSlider } from "../Range-slider/RangeSlider";
import { CollectionList } from "../collectionFilter/CollectionFilter";
import { Btn } from "../Btn/Btn";

export const Filters = ({ openMenu }) => {
  const [priceMenu, setPriceMenu] = React.useState("close");
  const [colorMenu, setColorMenu] = React.useState("close");
  const [collectionMenu, setCollectionMenu] = React.useState('close');
  const [slider, setSlider] = React.useState('');
  const [colo, setColors] = React.useState('');
  const [collectionList, setCollectionList] = React.useState('');
  React.useEffect(() => {
    if (priceMenu === "open") {
      setSlider(<RangerSlider />);
      
    }else{
      setSlider('');
    } 
    if(colorMenu === 'open'){
      setColors(<Color color={colors}/>)
    }else {
      setColors('');
    }

    if(collectionMenu === 'open'){
      setCollectionList(
        <CollectionList />
      )
    }else {
      setCollectionList('');
    }

    
  }, [priceMenu, colorMenu,collectionMenu]);

  function changePrice() {
    setPriceMenu(priceMenu === "open" ? "close" : "open");
  }

  function changeColor() {
    setColorMenu(colorMenu === "open" ? "close" : "open");
  }

  function changeCollection(){
    setCollectionMenu(collectionMenu === "open" ? "close" : "open");
  }
  return (
    <div className="filter">
      <div className="filter__wrapp">
        <ul className="filters__menu">
          <li className="filter__nav--items">Clear all</li>
          <li className="filter__nav--items active">Filters</li>
          <li onClick={openMenu} className={`filter__nav--items`}>
            Close
          </li>
        </ul>
        
        <div className="filter__price">
        
          
          <p className="filter__price--price">Price</p>
          <img
            src="../../img/up-down.svg"
            alt="open"
            className={`filter__price--img${priceMenu}`}
            onClick={changePrice}
          />
        
      
        </div>
        {slider}
        <div className="filter__color">
          <p className="filter__color--color">Color</p>
          <img
            src="../../img/up-down.svg"
            alt="open"
            className={`filter__color--img${colorMenu}`}
            onClick={changeColor}
          />
           
        </div>
        
        {colo}
        <div className="filter__collection">
          <p className="filter__collection--color">Collection</p>
          <img
            src="../../img/up-down.svg"
            alt="open"
            className={`filter__colletion--img${collectionMenu}`}
            onClick={changeCollection}
          />
           
        </div>
        {collectionList}

        <div className='filter__btn-down'>
          <Btn btnSubstring={'Apply(9 products)'} subClass='filter-btn'/>
        </div>
      </div>
     
    </div>
  );
};
