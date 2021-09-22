import React from 'react';


const Card = ({data}) => {
  const {
    price,
    cut_price,
    product_name,
    availability,
    discount,
    image
  } = data
  return (
    <div className="card">
    <div className="image-container">
        <p className="badge">{discount}% OFF</p>
        <img src={image} alt="product" />
    </div>
    <div className="name_avail">
        <p className="title">{product_name}</p>
        <p className="avail">{availability}</p>
    </div>
    <div className="price_button">
        <div className="price_off">
            <p className="price">{price}</p>
            <p className="strike">Rs {cut_price}</p>
        </div>
        <button className="add-to-cart">Add to Cart</button>
    </div>
  </div>
  )
}
export default Card;