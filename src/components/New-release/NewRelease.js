import React from 'react'
import './NewRelease.css'
import NewRelease_Card from './NewRelease_Card'


//IMAGE IMPORTS
import juice from "../../images/new-release/juice.png"
import left from "../../images/new-release/left.png"
import mango_juice from "../../images/new-release/mango_juice.png"
import orange_juice from "../../images/new-release/orange_juice.png"
import strawberry_juice from "../../images/new-release/strawberry_juice.png"

//New release data object
const data = [
    {
        image: juice,
        product_name: "Rough Cuts",
        availability: "Available in - 1L,2L",
        discount: "20",
        cut_price: "60",
        price: "Rs 48 1L"
    },
    {
        image: mango_juice,
        product_name: "Orange",
        availability: "Available in - 1L,2L",
        discount: "10",
        cut_price: "100",
        price: "Rs 58 1L"
    }, 
    {
        image: orange_juice,
        product_name: "Lemon",
        availability: "Available in - 1L,2L",
        discount: "50",
        cut_price: "20",
        price: "Rs 98 1L"
    }, 
    {
        image: strawberry_juice,
        product_name: "Mango",
        availability: "Available in - 1L,2L",
        discount: "50",
        cut_price: "40",
        price: "Rs 38 1L"
    }
];

export default function NewRelease() {
    return (
        <div className="new-release">

            <div className="left-container">
                <h2 className='title' style={{"transform":'translateX(-40px) translateY(-40px) '}}>New Release</h2>

                <img src={left} alt="product"/>
            </div>
            <div className="right-container">
             <NewRelease_Card data = {data[0]}/>
             <NewRelease_Card data = {data[1]}/>
             <NewRelease_Card data = {data[2]}/>
             <NewRelease_Card data = {data[3]}/>
            </div>
           
    </div>
    )
}
