import React from "react";
import "./Card.scss";

export default function Card({ children }) {
  const handleCapitalL = (string) => {
    let firstLetter = string[0].toUpperCase();
    let remainingLetters = string.slice(1);
    return firstLetter + remainingLetters;
  };

  const exercises = {
    Cardio: "./src/assets/cardio.jpg",
    "Olympic weightlifting": "./src/assets/olympic_weightlifting.jpg",
    Plyometrics: "./src/assets/plyometrics.jpg",
    Powerlifting: "./src/assets/powerlifting.jpg",
    Strength: "./src/assets/strength.jpg",
    Stretching: "./src/assets/stretching.jpg",
    Strongman: "./src/assets/strongman.jpg",
  };

  const extractedChildren =
    typeof children === "string"
      ? handleCapitalL(children.replace("_", " "))
      : children;

  return (
    <div className="card__wrapper">
      <img
        className="card__image"
        src={exercises[extractedChildren]}
        alt="exercise"
      />
      <h2 className="card">{extractedChildren}</h2>
    </div>
  );
}
