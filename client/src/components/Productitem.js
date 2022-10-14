import "./amazon.css";

import React from "react";

// product_id={pro.id}
//         title={pro.product_name}
//         description={pro.product_description}
//         items={pro.quantity}
// image={pro.product_image_url}
// import Wishlist from "./wishList";

const Productitem=({products,handleClick}) =>{
    const{product_name,product_description,quantity,product_image_url,price}=products;
   
        return (
            <div  style={{display: "grid",gridTemplateColumns:"4,1fr",justifyContent: "space-around" , paddingTop: "0px"}}>
        <div className="cards" >
                <div className="image_box">
                    <img src={product_image_url} alt="product_image"/>
                </div>
                <div className="details">
            <h3 className="header">{product_name}</h3>
            <div className="description">
            {product_description}
            </div>
            <div className="description">
           quantity: {quantity}
            </div>
            <p>Price - {price}Ksh</p>
            <br/>
            <button className="positive ui button" onClick={ ()=>handleClick(products)}> Add to cart</button>
            
            </div>
        </div>
        </div>
                );
}
export default Productitem;