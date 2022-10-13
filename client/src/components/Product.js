import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../App';

function Product() {

        const [products, setProducts] = useState([]);
        const [ search, setSearch] = useState(" ");

        const fetchData = () =>{
            fetch('/products')
            .then(r =>{
              return r.json()
            })
            .then((data) => {
              setProducts(data)
            })
        }
            useEffect(() => {
              fetchData()
            }, [])

        const searchProduct = (e) =>{
          if(e.key==="Enter"){
            axios.get("/products")
            .then(res =>setProducts(res.data))
          }
        }
    
        const handleOnSearch =(e) => {
          setSearch(e.target.value)
         }
    
         const filterProducts = products.filter((product) => product.product_name.includes(search))
    
           const displayProduct = products.map((product) => {
            return <Card key={product.id} product={product}/>})
      return (
        <>
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
        <div class="input-group">
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button onClick={handleOnSearch} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
        {displayProduct}
        </>
      )
}

export default Product