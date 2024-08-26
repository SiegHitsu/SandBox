import "./styles.css";
import React, { useState, useMemo } from "react";

export default function App(props) {
  const [closes, setCloses] = useState("");
  const [random, setRandom] = useState(0);
  const [color, setColor] = useState("BlueName");
  const namesArray = ["Sam", "Kenny", "Alexander"];

  const list = namesArray.map((name) => {
    return (
      <div
        className={closes === name && random !== 0 ? "YellowName" : "BlueName"}
      >
        {" "}
        {name}{" "}
      </div>
    );
  });

  const getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * (11 - 1) + 1);
    setRandom(randomNumber);
  };

  useMemo(() => {
    let selectedName = "";
    let lastDifference = 11;
    namesArray.every((name) => {
      const difference = Math.abs(random - name.length);
      if (difference < lastDifference) {
        selectedName = name;
      }
      lastDifference = difference;
      return true;
    });
    setCloses(selectedName);
  }, [random]);

  return (
    <div className="App">
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      {list}
      <button onClick={getRandomNumber} className="GreenButton">
        Generate Ramdom Numeber: {random}
      </button>
    </div>
  );
}
