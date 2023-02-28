import React, { useEffect, useState } from "react";
import Card from "../Card";
import "./SectionHero.scss";

export default function SectionHero() {
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");

  // const [exerciseArray, setExerciseArray] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    setSearch(inputValue);
    setInputValue("");
  };

  // useEffect(() => {
  //   $.ajax({
  //     method: "GET",
  //     url: "https://api.api-ninjas.com/v1/exercises?muscle=" + search,
  //     headers: { "X-Api-Key": "4nmeW2NeFxKcC9W+1O2XrQ==QtmbDMGWsjTTaKTb" },
  //     contentType: "application/json",
  //     success: function (result) {
  //       console.log(result);
  //       setExerciseArray(result);
  //     },
  //     error: function ajaxError(jqXHR) {
  //       console.error("Error: ", jqXHR.responseText);
  //     },
  //   });
  // }, [search]);

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
        <div className="section-hero__input-wrapper">
          <img
            src="./src/assets/logo.svg"
            className="section-hero__input-svg"
          ></img>
          <input
            onChange={handleInputChange}
            className="section-hero__input"
            placeholder="Search"
            value={inputValue}
          ></input>
          <button onClick={handleSearch} className="section-hero__input-button">
            Go!
          </button>
        </div>
        <div className="section-hero__cards">
          {/* {exerciseArray && exerciseArray.length > 0
            ? exerciseArray.map((item, i) => <Card key={i}>{item.name}</Card>)
            : null} */}
          {newArr.map((item, i) => (
            <Card key={i}>{item}</Card>
          ))}
        </div>
      </section>
    </div>
  );
}
