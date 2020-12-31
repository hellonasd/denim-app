import React from "react";
import { Viewall } from "../viewall/Viewall.jsx";
import { mockData } from "../../mock-data/mock-data.js";
import { Products } from "../Products/Products.jsx";
import { Title } from "../Title/Title";
import "../Bestsellers/Bestsellers.css";
import { Link} from "react-router-dom";


export const Bestsellers = () => {
  return (
    <div className="bestsellers__main">
      <div className="bestsellers__wrapper">
        <div className="bestsellers__title-wrapper">
          <Title titleName={`Bestsellers`} subClass={``} />
          <Viewall />
        </div>
        {mockData.map((item, i) => (
          <Link className='link' key={i} to={`/product/${i}`}>
          <Products
            key={Math.random() * 10}
            mobileRes={item.mobileUrl}
            tableRes={item.tableUcrl}
            dcRes={item.dcUrl}
            name={item.name}
            isPrise={item.price}
            bool={true}
          />
          </Link>
        ))}
      </div>
    </div>
  );
};
