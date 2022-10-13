//import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Products  = (props) => {
  const [product, setBoards] = useState({});
  const [images, setImages] = useState([]);
 //const {id}  = useParams();
  const [isWishAdd, setIsWishAdd] = useState(false);
  const [wishCount, setWishCount] = useState(0); 

  const wishCountHandler = async () => {
    if (!isWishAdd) {
      setWishCount(prev => prev +1)
      await fetch(`/wishlists/${product.id}`, {
        credentials: 'include',
        method: "POST",
        body: JSON.stringify({
         liked: true
        }),
      })
      alert("Add to wishlist.")
      console.log(product)
      console.log("count+1")
    } else  {
      setWishCount(prev => prev -1)
      await fetch(`/api/wishlists/${product.id}`, {
        credentials: 'include',
        method: "DELETE",
        body: JSON.stringify({
          liked: false
        })
      })
      alert("Removed from wishlist.")
      console.log(product)
      console.log("count-1")
    }
    setIsWishAdd(prev => !prev);
  }    
  

  useEffect(() => {
    (async function () {
      await axios.get(`https://27.96.131.85:8443/api/boards/$`, {
        withCredentials: true,
      }).then((res)=> {
        console.log(res);
        setBoards(res.data);
        setImages(res.data.boardImages);
      });

      // Save the post information state

    })();
  }, []);

    return(
      <div id="products">
        <p className="productsTitle">Product information</p>
        <div className="images_container">
          {
            images.map((images) => {
              return (
                <img className="productsImages"
                src={`https://27.96.131.85:8443/api/images/${images.id}`} />
              )
            })
          }
        </div>
       
        <div className="productsContext">  
          <div className="productsBoardTitle">
            {product.name}
          </div>
          
          <div className="productsName">
            Products : {product.productsName}
          </div>

          <div className="productsPrice">
            price : {product.price} one
          </div>

          <div className="productsWriter">
            seller : {product.writer}
          </div>
          
          <div className="productsText">
          {product.content}
          </div>
           <div className="goodsBtn">
            <span className="zzimBtn">
              <button class="btn btn-primary" type="submit" onClick={wishCountHandler}>to add to wishlist</button>
            </span>
            <button class="btn btn-primary" type="submit">to delete from wishlist</button>
          </div>
        </div>
      </div>
    );
};

export default Products;