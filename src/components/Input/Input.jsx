import React from "react";
import "./Input.scss";

export default function Input({ handleInputChange, inputValue, handleSearch }) {
  return (
    <div className="input__wrapper">
      <img src="./src/assets/logo.svg" className="input__svg"></img>
      <input
        onChange={handleInputChange}
        className="input"
        placeholder="Search"
        value={inputValue}
      ></input>
      <button onClick={handleSearch} className="input__button">
        Go!
      </button>
    </div>
  );
}
