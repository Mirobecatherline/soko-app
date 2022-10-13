import React, { useState } from 'react'
import '../App'

function Card({product}) {

  const [ actualDetails, setActualDetails ] = useState(false);

  const handleClick = () => {
    setActualDetails(actual => !actual)
  }
 
  return (
    <div className="card">
      <div className="cardBlock">
        <h4 className="product">Product: {product.product_name}</h4>
        <img src={product.product_image_url} alt="Product" />
        <button className="cardButton" onClick={handleClick}>Details</button>
        { actualDetails?
          <div>
          <p><span>Description: </span>{product.product_description}</p>
          <p><strong>Quantity: {product.quantity}</strong></p>
          <p><span>Price:</span>{product.price}</p>
        </div>
        :null
        }
      </div>
      <div className="subscribe">
        <button className="subscribeButton">Add to cart</button>
      </div>
    </div>
  )
}

export default Card