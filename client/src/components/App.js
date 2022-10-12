import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import LoginAdmin from "./LoginAdmin";
import LoginBuyer from "./LoginBuyer";
import NavBar from "./NavBar";
import SignUpAdmin from "./SignUpAdmin";
import SignUpBuyer from "./SignUpBuyer";

function App() {
  const [buyer, setbuyer] = useState(null);
  const [admin, setadmin] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me_buyer").then((r) => {
      if (r.ok) {
        r.json().then((buyer) => setbuyer(buyer));
      }
    });
  }, []);
  
  useEffect(() => {
    // auto-login
    fetch("/me_admin").then((r) => {
      if (r.ok) {
        r.json().then((admin) => setadmin(admin));
      }
    });
  }, []);

  return (
    <>
      <NavBar buyer={buyer} setbuyer={setbuyer} admin={admin} setadmin={setadmin}  />
      <main>
        {buyer || admin ? (
          <Switch>
            <Route path="/">
              <Home buyer={buyer} admin={admin}/>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signupbuyer">
              <SignUpBuyer setbuyer={setbuyer}  />
            </Route>
            <Route path="/signupadmin">
              <SignUpAdmin setadmin={setadmin} />
            </Route>
            <Route path="/loginbuyer">
              <LoginBuyer setbuyer={setbuyer} />
            </Route>
            <Route path="/loginadmin">
              <LoginAdmin setadmin={setadmin}/>
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
