import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../App';

function Product() {

        const [products, setProducts] = useState([]);
        // const [ search, setSearch] = useState(" ");

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

        // const searchProduct = (e) =>{
        //   if(e.key==="Enter"){
        //     axios.get("/products")
        //     .then(res =>setProducts(res.data))
        //   }
        // }
    
        // const handleOnSearch =(e) => {
        //   setSearch(e.target.value)
        // }
    
          //const filterProducts = products.filter((product) => product.productName.includes(search))
    
    
           //const productNames = products.map((product) => product.productName)
      return (
        <>
        {/* <div className="row2">
                {/* <h2>Find a product</h2>
                <div className="search">
                    <input type="text" placeholder="Enter Your Product Name" 
                   value={search} onChange={handleOnSearch}
                   onKeyPress={searchProduct}
                   />
                </div> }
            </div >
        <div className="product-list">{filterProducts.map((product) =>{
          return <Card name={product.productName} 
          image={product.productImageUrl} 
          price={product.price} 
          quantity={product.quantity} 
          description={product.productDescription} 
          key={product.id}/>
        })}
        </div>  */}
        {products.length > 0 && (
          <ul>
            {products.map(product => (
              <li key={product.id}>{product.productName}</li>
            ))}
          </ul>
        )}
        </>
      )
}

export default Product