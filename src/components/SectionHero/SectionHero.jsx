import React from "react";
import "./SectionHero.scss";

export default function SectionHero() {
  const newArr = [1, 2, 3, 4, 5];
  return (
    <div className="frame__wrapper">
      {newArr.map((item) => (
        <div className="frame">{item}</div>
      ))}
    </div>
  );
}
