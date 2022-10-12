import React, { useState } from "react";

function SignUpBuyer({ setbuyer }) {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup_buyer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((buyer) => setbuyer(buyer));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3" >
        <h1>BuyerSign Up</h1>
        <label htmlFor="username" className="form-label">username</label>
        <input
          type="text"
          id="username"
          className="form-control"
          autoComplete="off"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password" className="form-label">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          className="form-control"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpBuyer;
