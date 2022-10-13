import Product from "./Product";
function Home({ buyer,admin }) {
    if (buyer) {
      return (
        <div>
                <h1>Welcome, {buyer.username}!</h1>
                <Product/>
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
      return <h1>Please Login or Sign Up</h1>;
    }
  }
  
  export default Home;
  