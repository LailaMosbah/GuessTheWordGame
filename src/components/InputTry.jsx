import React, { useRef, useEffect } from "react";
import styles from "../styles/inputs.module.css";

export default function InputTry({
  isActive,
  row,
  rowIndex,
  handleInputChange,
  currentCol,
}) {
  const inputRefs = useRef([]);

  // Auto-focus the current column
  useEffect(() => {
    if (isActive && currentCol < row.length && inputRefs.current[currentCol]) {
      inputRefs.current[currentCol].focus();
    }
  }, [currentCol, isActive]);

  // Handle Arrows and input
  function handleKeyDown(e, index) {
    if (e.key === "ArrowRight" && index < row.length - 1) {
      inputRefs.current[index + 1].focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
    if (e.key === "Backspace" && !row[index].value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  }

  return (
    <div className={styles.word}>
      {row.map((letter, indexInput) => (
        <div key={indexInput}>
          <input
            ref={(el) => (inputRefs.current[indexInput] = el)}
            value={letter.value}
            type="text"
            maxLength={1}
            className={
              letter.status === "right"
                ? styles.inputRight
                : letter.status === "place"
                ? styles.inputPlace
                : letter.status === "wrong"
                ? styles.inputWrong
                : styles.input
            }
            disabled={!isActive}
            onKeyDown={(e) => handleKeyDown(e, indexInput)}
            onChange={(e) => {
              handleInputChange(rowIndex, indexInput, e.target.value);
              // Auto-focus next input
              if (indexInput < row.length - 1 && e.target.value) {
                inputRefs.current[indexInput + 1].focus();
              }
            }}
          />
        </div>
      ))}
    </div>
  );
}
