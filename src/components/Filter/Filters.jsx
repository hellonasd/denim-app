import React from "react";
import { Color } from "../Color/Color";
import { colors } from "../../mock-data/mock-data.js";
import "../Filter/filter.css";
import { RangerSlider } from "../Range-slider/RangeSlider";
import { CollectionList } from "../collectionFilter/CollectionFilter";
import { Btn } from "../Btn/Btn";
import { Cleaning } from "../Filter-cleaning/Cleaning";
import { Catalog } from "../Catalog/Catalog.jsx";
import { catalogImg } from "../../mock-data/mock-data.js";

export const Filters = () => {
  const [priceMenu, setPriceMenu] = React.useState("close");
  const [colorMenu, setColorMenu] = React.useState("close");
  const [collectionMenu, setCollectionMenu] = React.useState("close");
  const [slider, setSlider] = React.useState("");
  const [colo, setColors] = React.useState("");
  const [collectionList, setCollectionList] = React.useState("");
  const [menu, setMenu] = React.useState("close");
  const [array, setArray] = React.useState([]);
  const openMenu = () => {
    setMenu(menu === "open" ? "close" : "open");
  };

  function find(event) {
    catalogImg.forEach((it, i) => {
      const rgbToHex = (rgb) =>
        "#" +
        (
          (1 << 24) +
          (Number(rgb.match(/\d{1,3}/gi)[0]) << 16) +
          (Number(rgb.match(/\d{1,3}/gi)[1]) << 8) +
          Number(rgb.match(/\d{1,3}/gi)[2])
        )
          .toString(16)
          .slice(1);
      let r = rgbToHex(event.target.style.backgroundColor).toUpperCase();
      
      if (it.colors === r) {
        array.push(it);
        let noMathces = array.filter(
          (e, i, ar) => ar.findIndex((elem) => e.id === elem.id) === i
        );
        setArray(noMathces);
      }

      array.filter((e, i, are) => {
        
        if (e.colors !== r) {
          setArray(array.splice(0, array.length - 1));
        }
      });
    });
  }

  function filterModelItems(event) {
    
    let ClothingModel = event.target.innerHTML;
    catalogImg.forEach((el, i)=> {
      if(el.model === ClothingModel){
        
        array.push(el);
        let noMathces = array.filter(
          (e, i, ar) => ar.findIndex((elem) => e.id === elem.id) === i
        );
        setArray(noMathces);
      }
      array.filter((e, i, are) => {
        
        if (e.model !== ClothingModel) {
          setArray(array.splice(0, array.length - 1));
        }
      });
    })
  }

  React.useEffect(() => {
    if (priceMenu === "open") {
      setSlider(<RangerSlider min={10} max={60} />);
    } else {
      setSlider("");
    }
    if (colorMenu === "open") {
      setColors(<Color find={find} color={colors} />);
    } else {
      setColors("");
    }

    if (collectionMenu === "open") {
      setCollectionList(<CollectionList filterModelItems={filterModelItems} />);
    } else {
      setCollectionList("");
    }
  }, [priceMenu, colorMenu, collectionMenu, menu, array]);

  function changePrice() {
    setPriceMenu(priceMenu === "open" ? "close" : "open");
  }

  function changeColor() {
    setColorMenu(colorMenu === "open" ? "close" : "open");
  }

  function changeCollection() {
    setCollectionMenu(collectionMenu === "open" ? "close" : "open");
  }
  return (
    <>
      <span className="catalog__name">/ Jackets</span>
      <div className="filter">
        <div className="filter__wrapp">
          <button onClick={openMenu} className={`catalog__btn ${menu}`}>
            <p className="catalog__btn-name">Filter by</p>
            <img
              className={`catalog__btn-img ${menu}`}
              src="../../img/btn-open.svg"
              alt="filter-menu"
            />
          </button>
          <div className={`pop_menu ${menu}`}>
            <Cleaning />
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
            <div className="filter__btn-down">
              <Btn btnSubstring={`Apply(9 products)`} subClass="filter-btn" />
            </div>
            <div className={`filter__menu-wrapp`}>
              <p className="filter__menu-clear">Clear All</p>
            </div>
          </div>
        </div>

        <Catalog array={array} />
      </div>
    </>
  );
};
