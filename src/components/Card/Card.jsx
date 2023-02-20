import React from "react";
import "./Card.scss";

export default function Card({ children }) {
  return (
    <div className="card__wrapper">
      <img src="./src/assets/random-exercise.jpg" alt="exercise" />
      <h1 className="card">{children}</h1>
    </div>
  );
}
