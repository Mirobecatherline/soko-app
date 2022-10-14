import "./amazon.css";

import React,{ useEffect, useState } from "react";

// import Cards from "./Cart";
// import AdduserproductForm from "./AdduserproductForm";
//import Cart from "./Cart";
import Productitem from "./Productitem";

function Product({handleClick}) {
  const [products, setProducts]=useState([]);
  
  // const [cart,setcart]= useState([])
  
  // const handleClick=(products)=>{
  //   // cart.push(products)
  //   console.log(products)
  // }
  
  useEffect(()=>{
    fetch("/products")
    .then(r=>r.json())
    .then(data=>setProducts(data)) 
  },[])
  console.log(products)
 
  // function onsubmission(trans) {
  
  //   fetch("http://localhost:8001/store",
  //       {method:"POST",
  //         headers:{"Content-Type": "application/json"},
  //         body:JSON.stringify(trans),
  
  //     })
  //     .then(r=>r.json())//data is just the trans data we want to add
  //     .then(data=>setProducts(currentproduct=>[...currentproduct,data]))//unupdate kwa server ndio inaonekana kwa screen
  //     .catch(error=>alert(error))
  // } 
   
   const [searchInput, setSearchInput] = useState("");
  return(
      
      
        <div >
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search for item by name" 
        onChange={(e)=>setSearchInput(e.target.value)}
        
      />
      <i className="circular search link icon"></i>
    </div>
    {/* <AdduserproductForm onsubmission={onsubmission}/> */}
     <section>
     <div className="box">
     {products.filter((val)=>{
      if (searchInput ==="") {
        return val
      } 
      else if (val.product_name.toLowerCase().includes(searchInput.toLowerCase())){
        return val
      }
      return false;
    }).map((pro)=>{
        
      return (<Productitem 
        key={pro.id}
        products={pro}
        handleClick={handleClick}
       
      
        />)
        })}
  </div>
  </section>
  </div>
  
     
     
  )
}

export default Product;