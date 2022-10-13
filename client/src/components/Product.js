import React, { useState } from 'react'
import Card from './Card'

function Product() {
  const [products, setProducts]=useState([]);
  
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
     <div>   
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search for item by name" 
        onChange={(e)=>setSearchInput(e.target.value)}
        
      />
      <i className="circular search link icon"></i>
    </div>
    {/* <AdduserproductForm onsubmission={onsubmission}/> */}
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
        
      return (<Productitem image={pro.product_image_url}
        key={pro.id}
        product_id={pro.id}
        title={pro.product_name}
        description={pro.product_description}
        items={pro.quantity}
       
      
        />)
        })}
  </div>
     
     </div>
     
  )
}

export default Product;