import "./amazon.css";

import React, { useState } from "react";

// product_id={pro.id}
//         title={pro.product_name}
//         description={pro.product_description}
//         items={pro.quantity}
// image={pro.product_image_url}
// import Wishlist from "./wishList";

const Productitem = ({ products, handleClick }) => {
  const {
    product_name,
    product_description,
    quantity,
    product_image_url,
    price,
  } = products;

  const [addCart, setAddCart] = useState("");

  function handleAddCart() {
    setAddCart((addCart) => !addCart);
    handleClick(products);
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "4,1fr",
        justifyContent: "space-around",
        paddingTop: "0px",
      }}
    >
      <div className="cards">
        <div className="image_box">
          <img src={product_image_url} alt="product_image" />
        </div>
        <div className="details">
          <h3 className="header">{product_name}</h3>
          <div className="description">{product_description}</div>
          <br />
          <div className="description">Quantity: {quantity}</div>
          <p>Price: Ksh. {price}.00</p>
          <br />
          <button
            className="positive ui button"
            // onClick={() => handleClick(products)}
            onClick={handleAddCart}
          >
            {addCart ? "Remove From Cart" : "Add To Cart"}
            {/* Add to cart */}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Productitem;
