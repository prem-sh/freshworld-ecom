import React from "react";

//Stylesheet
import './App.css';

// Importing Components 
import Header from "./components/Header";
import Bestseller from "./components/Best-sellers/Bestseller";
import Footer from "./components/Footer";
import FeatureBox from "./components/FeatureBox";
import LittleBanners from "./components/LittleBanners";
import PopularCategories from "./components/PopularCategories";
import HorizontalBanner from "./components/HorizontalBanner";

// Images for Top Little banners
import banner1_top  from "./images/little-banners/banner1_top.png" 
import banner2_top from "./images/little-banners/banner2_top.png"
import banner3_top from "./images/little-banners/banner3_top.png"

//Images for Bottom Little banners
import banner1_bottom from "./images/little-banners/banner1_bottom.png"
import banner2_bottom from "./images/little-banners/banner2_bottom.png"
import banner3_bottom from "./images/little-banners/banner3_bottom.png"

//Immage for Horizontal banner top
import extra_offer_top from "./images/horizontal-banners/extra_offer_top.png" 
import extra_offer_bottom from "./images/horizontal-banners/extra_offer_bottom.png" 
import NewRelease from "./components/New-release/NewRelease";


function App() {
  return (
    <React.Fragment>
      <Header/>
      <FeatureBox/>
      <LittleBanners pictures = {[banner1_top,banner2_top,banner3_top]} />
      <PopularCategories/>
      <HorizontalBanner picture = {extra_offer_top}/>
      <Bestseller/>
      <HorizontalBanner picture = {extra_offer_bottom}/>
      <NewRelease/>
      <LittleBanners pictures = {[banner1_bottom,banner2_bottom,banner3_bottom]} /> 
      <Footer/>
    </React.Fragment>
  );
}

export default App;
