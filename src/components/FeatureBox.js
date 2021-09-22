import React from 'react'
import truck from '../images/features-box/truck.svg'
import loop from '../images/features-box/loop.svg'
import card from '../images/features-box/card.svg'
import headphones from '../images/features-box/headphones.svg'

import './FeatureBox_LittleBanners_PopularCategories.css'


export default function FeatureBox() {
    return (
        <section className="features-box">
            <div className="feature">
            <img src={truck} alt="img"/>
            <div>
                <p className="title">Free Shipping</p>
                <p>On all orders above Rs 500</p>
            </div>
            </div>
            <div className="feature">
            <img src={loop} alt="img"/>
            <div>
                <p className="title">Free Returns</p>
                <p>Returns are free within 7 days</p>
            </div>
            </div>
            <div className="feature">
            <img src={card} alt="Payment-Secure"/>
            <div>
                <p className="title">100% Payment Secure</p>
                <p>Your payment are safe with us.</p>
            </div>
            </div>
            <div className="feature">
            <img src={headphones} alt="Support"/>
            <div>
                <p className="title">Support 24/7</p>
                <p>Contact us 24 hours a day</p>
            </div>
            </div>
  </section>
    )
}
