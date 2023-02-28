import React from "react";
import "./Card.scss";

export default function Card({ children }) {
  const handleCapitalL = (string) => {
    let firstLetter = string[0].toUpperCase();
    let remainingLetters = string.slice(1);
    return firstLetter + remainingLetters;
  };

  const extractedChildren =
    typeof children === "string"
      ? handleCapitalL(children.replace("_", " "))
      : children;

  return (
    <div className="card__wrapper">
      <img src="./src/assets/random-exercise.jpg" alt="exercise" />
      <h2 className="card">{extractedChildren}</h2>
    </div>
  );
}
