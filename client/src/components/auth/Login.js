import React, { useState } from "react";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {

  }

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="text-center w-100" style={{ "max-width": "450px" }}>
          <h1 className="display-5">Login to Slack</h1>
          <form className="bg-white p-3" onChange={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                placeholder="Password (min 6 chars)"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
