import React, { useState } from "react";
import Navbar from "../Navbar";
import "./style.css";

const Browser = () => {
  let uniqueNumbers = [];
  const [even, setEven] = useState([]);
  const [odd, setOdd] = useState([]);

  const generate20Numbers = () => {
    let numbers = [];
    do {
      const number = Math.floor(Math.random() * (100 - 1) + 1);
      numbers.push(number);
      uniqueNumbers = [...new Set(numbers)];
    } while (uniqueNumbers.length <= 19);
  };

  const setIntoEvenOrOdd = () => {
    setEven(
      uniqueNumbers
        .sort(function (a, b) {
          return a - b;
        })
        .filter((num) => num % 2 === 0)
    );

    setOdd(
      uniqueNumbers
        .sort(function (a, b) {
          return a - b;
        })
        .filter((num) => num % 2 !== 0)
    );
  };

  return (
    <div>
      <Navbar />

      <div>
        <h2>Browser</h2>
      </div>
      <button
        onClick={() => {
          generate20Numbers();
          setIntoEvenOrOdd();
        }}
      >
        Draw 20 numbers
      </button>
      <div className="columns">
        <div className="left">
          <h3>Even numbers: {even.length}</h3>
          {even.map((nr) => (
            <p key={nr}>{nr}</p>
          ))}
        </div>
        <div className="right">
          <h3>Odd numbers: {odd.length}</h3>
          {odd.map((nr) => (
            <p key={nr}>{nr}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browser;
