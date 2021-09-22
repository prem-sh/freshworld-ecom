import React from 'react'
import "./Footer.css"

import logo from "../images/footer/vectors/logo.svg"
import playstore from "../images/footer/vectors/playstore.svg" 
import iappstore from "../images/footer/vectors/iappstore.svg" 
import linkedin from "../images/footer/vectors/linkedin.svg" 
import twitter from "../images/footer/vectors/twitter.svg"
import facebook from "../images/footer/vectors/facebook.svg"
import instagram from "../images/footer/vectors/instagram.svg" 
import youtube from "../images/footer/vectors/youtube.svg" 


export default function Footer() {
    return (
        <div className="footer">
            <div>
            <img style={{marginLeft: "10px","marginTop": "15px"}} alt="img" src={logo} />
            <div className="left">
                    <li><label style={{"fontWeight": "bold"}}>+91 9488312800</label></li>
                    <li><a style={{"color": "#28A745", "textDecoration": "none"}} href="#">freshworld@gmail.com</a></li>
                    <li><a  style={{"textDecoration": "none"}} href="#">www.freshworld.com</a></li>
            </div>
            </div>
            <div className="l">
                <ul><p className="title">TOP CITIES</p>
                    <li><p>New Delhi</p></li>
                    <li><p>Bengaluru</p></li>
                    <li><p>Hydrabad</p></li>
                    <li><p>Kolkata</p></li>
                    <li><p>Gurugram</p></li>
                </ul>
            </div>
            <div className="l">
                
                <ul><p className="title">CATEGORIES</p>
                    <li><p>Vegetables</p></li>
                    <li><p>Fruites</p></li>
                    <li><p>Milk & Meat</p></li>
                    <li><p>Soft Drinks</p></li>
                    <li><p>Biscuits & Cokies</p></li>
                </ul>
            </div>
            <div className="l">
                
                <ul><p className="title">ABOUT US</p>
                    <li><p>Company Information</p></li>
                    <li><p>Careers</p></li>
                    <li><p>Store Location</p></li>
                    <li><p>Affillate Program</p></li>
                    <li><p>Copy Right</p></li>
                </ul>

            </div>
            <div className="low-offset">
            <div className="l">
                <p className="title">Download App</p>
                <img src={playstore}/>
                    <img src={iappstore}/>
                <p className="title">Social</p>
                <img src={linkedin}/>
                <img src={twitter}/>
                <img src={facebook}/>
                <img src={instagram}/>
                <img src={youtube}/>
            </div>
            </div>
    </div>
    )
}
