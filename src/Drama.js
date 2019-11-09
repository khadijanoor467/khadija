import React from "react";
import { Link } from "react-router-dom";

function Drama(props) {
  console.log(props);
  return (
    <div
      style={{
        border: "3px solid black",
        width: "500px",
        background: "red"
      }}
    >
      <h1 style={{ color: "green" }}>{props.heart.title}</h1>
      <h2 style={{ color: "purple" }}>{props.heart.year}</h2>
      <h3 style={{ color: "yellow" }}>{props.heart.imdbID}</h3>
      <img className="img" src={`/img/posters/${props.heart.poster}`} />
      <p>{props.heart.description}</p>
    </div>
  );
}
export default Drama;
