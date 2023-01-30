import React from "react";
import Card from "../Card";
import "./SectionHero.scss";

export default function SectionHero() {
  const newArr = [1, 2, 3, 4, "Test"];
  return (
    <div className="section-hero__wrapper">
      <section className="section-hero">
        <div className="section-hero__input-wrapper">
          <div className="section-hero__input-svg">SVG</div>
          <input className="section-hero__input" placeholder="Search"></input>
          <button className="section-hero__input-button">Go!</button>
        </div>
        <div className="section-hero__cards">
          {newArr.map((item, i) => (
            <Card key={i}>{item}</Card>
          ))}
        </div>
      </section>
    </div>
  );
}
