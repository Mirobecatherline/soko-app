import { Link } from "react-router-dom";
import React from "react";

function NavBar({ buyer, setbuyer }) {
  function handleLogoutClick() {
    fetch("/logout_buyer", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setbuyer(null);
      }
    });
  }

  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        {buyer ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;
