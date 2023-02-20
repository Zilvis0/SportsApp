import React from "react";
import "./SectionNavigation.scss";

export default function SectionNavigation() {
  return (
    <nav className="section-navigation">
      <div className="section-navigation__logo">
        <img src="./src/assets/logo.svg"></img>
        <div className="section-navigation__logo-text">SportsApp</div>
      </div>
      <menu className="section-navigation__menu">
        <div className="section-navigation__option">Test</div>
        <div className="section-navigation__option">Test2</div>
        <div className="section-navigation__option">Test3</div>
        <div className="section-navigation__option">Test4</div>
      </menu>
    </nav>
  );
}
