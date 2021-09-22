import React from 'react';

import OptionLines from "../images/header/option lines.svg";
import Logo from "../images/header/logo.svg";
import Search from "../images/header/Vectorsearch.svg";
import Location from "../images/header/location.svg";
import Vector from "../images/header/vectorcart.svg";
import HeaderImg from "../images/header/header 2.png";
import Button from "../images/header/btn.svg"

const Header = () => {

  React.useEffect(() => {
    var myIndex = 0;
    carousel();

    function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) {
        myIndex = 1
      }
      // x[myIndex-1].style.display = "block";
      setTimeout(carousel, 5000); // Change image every 5 seconds
    }
  })

  const openNav = () => {
    var element = document.getElementById("mySidenav");
    element
      .classList
      .toggle("sidebymenu");
  }
  return (
    <React.Fragment>
      <nav
        style={{
        position: "fixed",
        top: '0',
        zIndex: "999999"
      }}>
        <div>
          <span id="bar" onClick={openNav}>
            <img src={OptionLines} alt="menubar"/>
          </span>
        </div>
        <img src={Logo} alt="freshworld" class="logo"/>
        <div class="top-container">
          <div>
            <form action="#" class="search-box">
              <input
                type="text"
                class="Homepage-search-bar texts"
                placeholder="Search"
                name="search"/>
              <button>
                <img src={Search} alt=""/>
              </button>
            </form>
          </div>
          <a id="chnloc" href="#">
            <img src={Location} alt=""/>
            <p class="texts">Chennai</p>
          </a>
          <a id="login" href="#">
            <p class="texts">Login/Signup</p>
          </a>
          <a id="cart" href="#">
            <img src={Vector} alt=""/>
            <p class="texts">Cart</p>
          </a>
        </div>
      </nav>

      <div id="mySidenav" className="sidenav">
        <a id="superstore" href="#">Super Store</a>
        <a href="#">Home</a>
        <a href="#">Fruits</a>
        <a href="#">Vegetables</a>
        <a href="#">Dried Fruits</a>
        <a href="#">Others</a>
        <a href="#">About Us</a>
        <a href="#">My Account</a>
      </div>

      
       
        <div class="header-image">
            <img src={HeaderImg} class='width100' alt="dry_fruits"/>
            <div class="header-image-caption">
              <h1>40% Dry Fruits Sale</h1>
              <h2>For all Product</h2>
              <button className="shop-now">Shop Now <img src={Button} alt="btn"/> </button>
            </div>
          
          
        </div>
        
    </React.Fragment>
  )
}

export default Header;