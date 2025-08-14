import React, { useState } from "react";
import InputTry from "./InputTry";
import styles from "../styles/inputs.module.css";
import Controls from "./Controls";
import words from "../data/words";

export default function Inputs() {
  let numberOfTries = 6;
  const [currentTry, setCurrentTry] = useState(2);
  let wordToGuess = words[Math.floor(Math.random() * words.length)];

  return (
    <>
      {Array.from({ length: numberOfTries }).map((_, indexTry) => (
        <div key={indexTry} className={styles.containerInput}>
          <p className={styles.indexWord}> Try {indexTry + 1} :</p>
          <InputTry
            isActive={indexTry + 1 === currentTry}
            wordToGuess={wordToGuess}
          />
        </div>
      ))}
      <Controls />
    </>
  );
}
