import React, { useEffect, useState } from "react";
import Card from "../Card";
import Input from "../Input";
import "./SectionHero.scss";

export default function SectionHero({ setSearch, setCategory }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    setSearch(inputValue);
    setCategory("muscle");
    setInputValue("");
  };

  const newArr = [
    "cardio",
    "olympic_weightlifting",
    "plyometrics",
    "powerlifting",
    "strength",
    "stretching",
    "strongman",
  ];
  return (
    <div className="section-hero__wrapper">
      <section className="section-hero">
        <Input
          handleSearch={handleSearch}
          inputValue={inputValue}
          handleInputChange={handleInputChange}
        />
        <div className="section-hero__cards">
          {newArr.map((item, i) => (
            <Card setSearch={setSearch} setCategory={setCategory} key={i}>
              {item}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
