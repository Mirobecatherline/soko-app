import React, { useEffect, useState } from "react";

function Productitem({image,title,description,product_id}) {
    const [read, setRead]=useState(false)
    useEffect(() => {
        // auto-login
        fetch(`/products/:1`).then((r) => {
          if (r.ok) {
            r.json().then((read) => setRead(read));
          }
        });
      }, []);
    function handleaddclick() {
        console.log(read) 
        
    }
    
    function handleremoveclick() {
        setRead((read)=>read=!read)
    }
    function handlewishclick() {
        setRead((read)=>read=!read)
    }
        return (
        <div className="ui card" >
                <div className="image">
                    <img src={image} alt="product_image"/>
                </div>
                <div className="content">
            <h3 className="header">{title}</h3>
            <div className="description">
            {description}
            </div>
            <br/>
            <button className="positive ui button"  onClick={handleaddclick(product_id)}> Add to cart</button>
            <button className="positive ui button"  onClick={handleremoveclick}> Remove from cart</button>
            <button className="positive ui button"  onClick={handlewishclick}> Add to wishlist</button>
            </div>
        </div>
                );
}
export default Productitem;