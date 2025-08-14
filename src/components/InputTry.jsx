import React, { useRef } from "react";
import styles from "../styles/inputs.module.css";

export default function InputTry({ isActive, wordToGuess }) {
  const inputRefs = useRef([]);

  let numberOfLetters = 6;

  // Handle Arrows Buttons
  function handleKeyDown(e, index) {
    if (e.key === "ArrowRight" && index < numberOfLetters - 1)
      inputRefs.current[index + 1].focus();
    if (e.key === "ArrowLeft" && index > 0)
      inputRefs.current[index - 1].focus();
  }

  return (
    <div className={styles.word}>
      {Array.from({ length: numberOfLetters }).map((_, indexInput) => (
        <div key={indexInput}>
          <input
            key={indexInput}
            ref={(el) => (inputRefs.current[indexInput] = el)}
            type="text"
            maxLength={1}
            className={styles.input}
            disabled={!isActive}
            onKeyDown={(e) => handleKeyDown(e, indexInput)}
          />
        </div>
      ))}
    </div>
  );
}
