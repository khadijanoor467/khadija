import React from "react";
import { Link } from "react-router-dom";

function MyContact() {
  return (
    <div>
      <h2>My Contact detail listed below</h2>
      <h3>MobileNumber:042-487853772</h3>
      <h3>email:Anaya.khan@gmail.com</h3>
      <h3>vjkfjbvdfkjvnkdfgvkj</h3>
      <Link to="/">
        <h3>Go back to Home Page</h3>
      </Link>
      <Link to="/registration">
        <h3>Go back to Registration Page</h3>
      </Link>
    </div>
  );
}
export default MyContact;
