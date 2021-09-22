import React from 'react'
import './FeatureBox_LittleBanners_PopularCategories.css'

export default function HorizontalBanner({picture}) {
    return (
        <div>
         <img src={picture} alt="banner" className="slim-wide-banner"/>
        </div>
    )
}
