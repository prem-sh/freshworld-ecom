import React from 'react'

import veg from "../images/popular-categories/veg.png"
import fruites from "../images/popular-categories/fruites.png"
import dry_fruits from "../images/popular-categories/dry_fruits.png"
import fresh_cream_masala from "../images/popular-categories/fresh_cream_masala.png"
import snacks from "../images/popular-categories/snacks.png"
import milk_egg from "../images/popular-categories/milk_egg.png"

import './FeatureBox_LittleBanners_PopularCategories.css'



export default function PopularCategories() {
    return (
        <section className="popular-categories">
    <h2>Popular Categories</h2>
    <div className="category-grid">
      <div className="category">
        <img src={veg} alt="vegetables"/>
        <div className="category-textbox">
          <p className="title">Fresh Vegetables</p>
          <p className="offer">50% off</p>
          <p className="shop--now">Shop Now</p>
        </div>
      </div>
      <div className="category">
        <img src={fruites} alt="fruites"/>
        <div className="category-textbox">
          <p className="title">Fresh Fruit</p>
          <p className="offer">50% off</p>
          <p className="shop--now">Shop Now</p>
        </div>
      </div>
      <div className="category">
        <img src={dry_fruits} alt="dry fruits"/>
        <div className="category-textbox">
          <p className="title">Dried Fruits</p>
          <p className="offer">50% off</p>
          <p className="shop--now">Shop Now</p>
        </div>
      </div>
      <div className="category">
        <img src={fresh_cream_masala} alt="fresh cream"/>
        <div className="category-textbox">
          <p className="title">Fresh Cream & Masala</p>
          <p className="offer">50% off</p>
          <p className="shop--now">Shop Now</p>
        </div>
      </div>
      <div className="category">
        <img src={snacks} alt="snacks"/>
        <div className="category-textbox">
          <p className="title">Snacks & Soft drinks</p>
          <p className="offer">50% off</p>
          <p className="shop--now">Shop Now</p>
        </div>
      </div>
      <div className="category">
        <img src={milk_egg} alt="milk and eggs"/>
        <div className="category-textbox">
          <p className="title">Milk,Egg & Meat</p>
          <p className="offer">50% off</p>
          <p className="shop--now">Shop Now</p>
        </div>
      </div>
    </div>
  </section>
    )
}
