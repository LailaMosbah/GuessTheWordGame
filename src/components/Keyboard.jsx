import React from "react";
import styles from "../styles/keyboard.module.css";

export default function Keyboard({ usedLetters }) {
  const keyboardRows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];

  return (
    <div className={styles.keyboard}>
      {keyboardRows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.keyboardRow}>
          {row.map((letter) => (
            <div
              key={letter}
              className={`${styles.key} ${
                usedLetters[letter] === "right"
                  ? styles.keyRight
                  : usedLetters[letter] === "place"
                  ? styles.keyPlace
                  : usedLetters[letter] === "wrong"
                  ? styles.keyWrong
                  : ""
              }`}
            >
              {letter.toUpperCase()}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
