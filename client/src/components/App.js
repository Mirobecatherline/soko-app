import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";
import SignUp from "./SignUp";

function App() {
  const [buyer, setbuyer] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me_buyer").then((r) => {
      if (r.ok) {
        r.json().then((buyer) => setbuyer(buyer));
      }
    });
  }, []);

  return (
    <>
      <NavBar buyer={buyer} setbuyer={setbuyer} />
      <main>
        {buyer ? (
          <Switch>
            <Route path="/">
              <Home buyer={buyer}/>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setbuyer={setbuyer} />
            </Route>
            <Route path="/login">
              <Login setbuyer={setbuyer} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;
