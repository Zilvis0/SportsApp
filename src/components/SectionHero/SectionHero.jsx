import React from "react";
import "./SectionHero.scss";
import Card from "../Card";

export default function SectionHero() {
  const newArr = [1, 2, 3, 4, 5];
  return (
    <div className="section-hero__wrapper">
      <section className="section-hero">
        <div className="section-hero__input-wrapper">
          <div className="section-hero__input-svg">SVG</div>
          <input className="section-hero__input" placeholder="Search"></input>
          <button className="section-hero__input-button">Go!</button>
        </div>
        <div className="section-hero__cards">
          {newArr.map((item) => (
            <Card>{item}</Card>
          ))}
        </div>
      </section>
    </div>
  );
}
