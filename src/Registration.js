import React from "react";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <div>
      <h2>Fill Registration Form</h2>
      Name:
      <input type="text" />
      <br />
      password:
      <input type="password" />
      <br />
      email:
      <input type="email" />
      <Link to="/">
        <h3>Go back to Home Page</h3>
      </Link>
      <Link to="/contact">
        <h3>Go back to Contact Page</h3>
      </Link>
    </div>
  );
}
export default Registration;
