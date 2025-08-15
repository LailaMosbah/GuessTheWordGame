import React, { useState } from "react";
import Inputs from "./Inputs";
import Controls from "./Controls";
import Message from "./Message";
import words from "../data/words";

export default function GameArea() {
  const wordLength = 6;
  const numberOfTries = 6;

  // Pick random word
  const [targetWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  // Track attempts
  const [tries, setTries] = useState(
    Array(numberOfTries).fill(Array(wordLength).fill({ value: "", status: "" }))
  );
  const [currentTry, setCurrentTry] = useState(0);
  const [message, setMessage] = useState("");

  // Handle typing in inputs
  function handleInputChange(rowIndex, colIndex, value) {
    const updatedTries = tries.map((row, r) =>
      r === rowIndex
        ? row.map((cell, c) =>
            c === colIndex ? { ...cell, value, status: "" } : cell
          )
        : row
    );
    setTries(updatedTries);
  }

  // Check if word is correct
  function checkWord() {
    const attempt = tries[currentTry];
    let newRow = attempt.map((cell, i) => {
      if (cell.value === targetWord[i]) {
        return { ...cell, status: "right" };
      } else if (targetWord.includes(cell.value)) {
        return { ...cell, status: "place" };
      } else {
        return { ...cell, status: "wrong" };
      }
    });

    const updatedTries = tries.map((row, r) =>
      r === currentTry ? newRow : row
    );

    setTries(updatedTries);

    if (newRow.every((cell) => cell.status === "right")) {
      setMessage("🎉 You guessed the word!");
    } else if (currentTry === numberOfTries - 1) {
      setMessage(`😢 Game Over! The word was ${targetWord}`);
    } else {
      setCurrentTry(currentTry + 1);
    }
  }

  return (
    <div>
      <Inputs
        tries={tries}
        currentTry={currentTry}
        handleInputChange={handleInputChange}
      />
      <Controls checkWord={checkWord} />
      <Message message={message} />
    </div>
  );
}
