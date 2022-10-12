import { Link } from "react-router-dom";
import React from "react";

function NavBar({ buyer, setbuyer ,admin ,setadmin }) {
  function handleLogoutClick() {
    fetch("/logout_buyer", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setbuyer(null);
      }
    });
    
    fetch("/logout_admin", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setadmin(null);
      }
    });
  }

  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        {buyer || admin ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link to="/signupadmin">AdminSignup</Link>
            <Link to="/signupbuyer">BuyerSignup</Link>
            <Link to="/loginadmin">AdminLogin</Link>
            <Link to="/loginbuyer">BuyerLogin</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;
