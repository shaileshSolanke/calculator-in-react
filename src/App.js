import React, { createContext, useState } from "react";
import { Container } from "./components/Container";
import { Display } from "./components/Display";
import { Keys } from "./components/Keys";

import "./styles/App.module.css";

const keyData = [
  "Clear",
  "/",
  "*",
  "7",
  "8",
  "9",
  "-",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "0",
  "00",
  ".",
  "=",
];

export const keyContext = createContext();

function App() {
  const [calculation, setCalculation] = useState("");

  function handleClick(key) {
    if (key === "Clear") {
      setCalculation("");
    } else if (key === "=") {
      try {
        setCalculation(eval(calculation));
      } catch (e) {
        setCalculation("error");
      }
    } else {
      setCalculation(calculation + key);
    }
  }

  return (
    <React.Fragment>
      <Container>
        <Display calculation={calculation} />
        <keyContext.Provider value={keyData}>
          <Keys handleClick={handleClick} />
        </keyContext.Provider>
      </Container>
    </React.Fragment>
  );
}

export default App;
