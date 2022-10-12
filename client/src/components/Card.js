import React, { useState } from 'react'
import '../App'

function Card({product_name, product_image_url, product_description, quantity, price, subscribe}) {

  const [ actualDetails, setActualDetails ] = useState(false);

  const handleClick = () => {
    setActualDetails(actual => !actual)
  }
  return (
    <div className="card">
        <h4 className="Product_name">Product: {product_name}</h4>
        <img src={product_image_url} alt="book" />
        <button className="cardButton" onClick={handleClick}>Details</button>
        { actualDetails?
          <div>
          <p><span>Description: </span>{product_description}</p>
          <p><strong>Quantity: {quantity}</strong></p>
          <p><span>Price:</span>{price}</p>
        </div>
        :null
        }
        <div className="subscribe">
        <button className="subscribeButton">Subscribe</button>
        </div>
    </div>
  )
}

export default Card