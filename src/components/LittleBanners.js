import React from 'react'
import './FeatureBox_LittleBanners_PopularCategories.css'


export default function LittleBanners({pictures}) {

    const banner1 = pictures[0];
    const banner2 = pictures[1];
    const banner3 = pictures[2];

    return (
        <section className="banner-box">
    
        <img className='small' src={banner1} alt="banner"/>
        <img className='large' src={banner2} alt="banner"/>
        <img className='small' src={banner3} alt="banner"/>
      </section>
    )
}
