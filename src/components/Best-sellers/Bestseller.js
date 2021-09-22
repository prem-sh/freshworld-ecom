import React from 'react';
import Card from "./Card";

import './Bestseller.css'

//Importing data file
import Bestseller_data from './Bestseller_data';

const Bestseller = () => {
  

  return (
    <div className="bestseller">
    <h2>Best Seller</h2>
    <div className="bestseller-grid">
      
    {Bestseller_data.map((item, i) => {
        return (
          <Card key={i} data={item}/>
        );
    })}
      
    </div>
    </div>
  )
}

export default Bestseller
