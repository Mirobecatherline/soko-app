import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./products.css";

const Products  = (props) => {
  const [boards, setBoards] = useState({});
  const [images, setImages] = useState([]);
  const {id}  = useParams();
  const [isWishAdd, setIsWishAdd] = useState(false);
  const [wishCount, setWishCount] = useState(0); 

  const wishCountHandler = async () => {
    if (!isWishAdd) {
      setWishCount(prev => prev +1)
      await fetch(`https://27.96.131.85:8443/api/likeBoards/${boards.id}`, {
        credentials: 'include',
        method: "POST",
        body: JSON.stringify({
         liked: true
        }),
      })
      alert("Add to wishlist.")
      console.log(boards)
      console.log("count+1")
    } else  {
      setWishCount(prev => prev -1)
      await fetch(`https://27.96.131.85:8443/api/likeBoards/${boards.id}`, {
        credentials: 'include',
        method: "DELETE",
        body: JSON.stringify({
          liked: false
        })
      })
      alert("Removed from wishlist.")
      console.log(boards)
      console.log("count-1")
    }
    setIsWishAdd(prev => !prev);
  }    
  

  useEffect(() => {
    (async function () {
      await axios.get(`https://27.96.131.85:8443/api/boards/${id}`, {
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
            {boards.title}
          </div>
          
          <div className="productsName">
            Products : {boards.productsName}
          </div>

          <div className="productsPrice">
            price : {boards.price} one
          </div>

          <div className="productsWriter">
            seller : {boards.writer}
          </div>
          
          <div className="productsText">
          {boards.content}
          </div>

          <div className="productsBtn">
            <span className="zzimBtn">
              <button class="btn btn-primary" type="submit" onClick={wishCountHandler}></button>
            </span>
            <button class="btn btn-primary" type="submit">email seller</button>
          </div>
        </div>
      </div>
    );
};

export default products;