import React, { useState } from "react";

function LoginAdmin({ setadmin }) {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login_admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((admin) => setadmin(admin));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <h1>AdminLogin</h1>
        <label htmlFor="username" className="form-label">username</label>
        <input
          type="text"
          id="username"
          className="form-control"
          autoComplete="off"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          id="password"
          className="form-control"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default LoginAdmin;