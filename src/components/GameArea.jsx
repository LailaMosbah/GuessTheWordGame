import React, { useState } from "react";
import Inputs from "./Inputs";
import Controls from "./Controls";
import Message from "./Message";
import Keyboard from "./Keyboard";
import words from "../data/words";

export default function GameArea() {
  const wordLength = 6;
  const numberOfTries = 6;
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const [targetWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const [tries, setTries] = useState(
    Array(numberOfTries).fill(Array(wordLength).fill({ value: "", status: "" }))
  );
  const [currentTry, setCurrentTry] = useState(0);
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [usedLetters, setUsedLetters] = useState({ hintsRemaining: 3 });

  // Handle typing in inputs
  function handleInputChange(rowIndex, colIndex, value) {
    const updatedTries = tries.map((row, r) =>
      r === rowIndex
        ? row.map((cell, c) =>
            c === colIndex
              ? { ...cell, value: value.toLowerCase(), status: "" }
              : cell
          )
        : row
    );
    setTries(updatedTries);
    setCurrentCol(colIndex + 1); // Update current column for focus
  }

  // Check if word is correct
  function checkWord() {
    const attempt = tries[currentTry];
    let newRow = attempt.map((cell, i) => {
      const letter = cell.value.toLowerCase();
      let status = "wrong";
      if (letter === targetWord[i].toLowerCase()) {
        status = "right";
      } else if (targetWord.includes(letter)) {
        status = "place";
      }

      setUsedLetters((prev) => ({
        ...prev,
        [letter]:
          status === "right" ? "right" : status === "place" ? "place" : "wrong",
      }));

      return { ...cell, status };
    });

    const updatedTries = tries.map((row, r) =>
      r === currentTry ? newRow : row
    );

    setTries(updatedTries);

    if (newRow.every((cell) => cell.status === "right")) {
      const newScore =
        1000 - currentTry * 100 + usedLetters.hintsRemaining * 50;
      setScore(newScore);
      setMessage(`🎉 You guessed the word! Score: ${newScore}`);
    } else if (currentTry === numberOfTries - 1) {
      setMessage(`😢 Game Over! The word was ${targetWord}`);
    } else {
      setCurrentTry(currentTry + 1);
      setCurrentRow(currentRow + 1);
      setCurrentCol(0); // Reset column for new row
    }
  }

  // Hint function
  function handleHint() {
    if (usedLetters.hintsRemaining <= 0) return;

    const word = targetWord.toLowerCase();

    // build order: currentCol..end, then 0..currentCol-1
    const indices = [...Array(wordLength).keys()];
    const order = indices
      .slice(currentCol)
      .concat(indices.slice(0, currentCol));

    // find first slot that's empty or wrong
    let applyAt = -1;
    for (const i of order) {
      const cellVal = (tries[currentRow][i].value || "").toLowerCase();
      if (cellVal !== word[i]) {
        applyAt = i;
        break;
      }
    }
    if (applyAt === -1) return; // row is already perfect

    // immutably update just the current row/cell
    setTries((prev) =>
      prev.map((row, r) =>
        r === currentRow
          ? row.map((cell, c) =>
              c === applyAt
                ? { value: word[applyAt], status: "right" }
                : { ...cell }
            )
          : row
      )
    );

    setUsedLetters((prev) => ({
      ...prev,
      [word[applyAt]]: "right",
      hintsRemaining: prev.hintsRemaining - 1,
    }));

    setCurrentCol(Math.min(applyAt + 1, wordLength - 1));
  }

  return (
    <div>
      <Inputs
        tries={tries}
        currentTry={currentTry}
        handleInputChange={handleInputChange}
        currentRow={currentRow}
        currentCol={currentCol}
      />
      <Controls
        checkWord={checkWord}
        onHint={handleHint}
        hintsRemaining={usedLetters.hintsRemaining}
      />
      <Message message={message} />
      <Keyboard usedLetters={usedLetters} />
    </div>
  );
}
