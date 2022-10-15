import "./navbar.css";
import "./home.css"

import Cart from "./Cart";
import Product from "./Product";
import { useState } from "react";

function Home({ buyer,admin }) {
    const [show,setShow]=useState(true)
    const [cart,setCart]= useState([])
  
    const handleClick=(products)=>{
      if (cart.indexOf(products) !== -1) return;
    setCart([...cart, products]);
  };
  const handleChange = (products, d) => {
    const ind = cart.indexOf(products);
    const arr = cart;
    arr[ind].quantity += d;

    if (arr[ind].quantity === 0) arr[ind].quantity = 1;
    setCart([...arr]);
  };
  if (buyer) {
      return (
        <div>
          <nav>
            <div className="nav_box">
              <span className="my_shop" onClick={() => setShow(true)}>
                My Shoping
              </span>
              <div className="cart" onClick={() => setShow(false)}>
                <span>
                  <i className="fas fa-cart-plus"></i>
                </span>
                <span>{cart.length}</span>
              </div>
            </div>
          </nav>
          <br/>
          
          <h1>Welcome, {buyer.username}!</h1>
          <br/>
          {show?<Product  handleClick={handleClick}/>: <Cart cart={cart} setCart={setCart} handleChange={handleChange}/> }
        </div>
      );
    }
    else if (admin) {
      return (
        <div>
          
                <h1>Welcome, {admin.username}!</h1>
                <Product/>
        </div>
      );
    } else {
      return (
        <div id="header-hero">
        <div class="header-bg"> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412561/E-commerce%20landing%20page/header/header-image_3x.jpg" alt="header-image" /> </div>
        <div class="header-content">
          <p class="heading-1">product collection of all time</p>
          <h1>wellcome to sok<span class="logo-style">o</span> unique store</h1>
          <p class="description">this is an online store where you can find all in one roof</p>
          <div class="button">
            <p>Welcome</p>
          </div>
        </div>
       
      </div>

      )
      
    }
  }
  
  export default Home;
  