import React from "react";
import "./Card.scss";

export default function Card({ children }) {
  return (
    <div className="card__wrapper">
      <h1 className="card">{children}</h1>
    </div>
  );
}
