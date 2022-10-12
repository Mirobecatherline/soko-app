function Home({ buyer,admin }) {
    if (buyer) {
      return (
        <div>
                <h1>Welcome, {buyer.username}!</h1>
                <h1>Below are the products from which you can buy</h1>
        </div>
      );
    }
    else if (admin) {
      return (
        <div>
                <h1>Welcome, {admin.username}!</h1>
                <h1>Below are the products from which you can buy</h1>
        </div>
      );
    } else {
      return <h1>Please Login or Sign Up</h1>;
    }
  }
  
  export default Home;
  