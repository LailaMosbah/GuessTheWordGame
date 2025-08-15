import React, { useRef } from "react";
import styles from "../styles/inputs.module.css";

export default function InputTry({
  isActive,
  row,
  rowIndex,
  handleInputChange,
}) {
  const inputRefs = useRef([]);

  // Handle Arrows
  function handleKeyDown(e, index) {
    if (e.key === "ArrowRight" && index < row.length - 1)
      inputRefs.current[index + 1].focus();
    if (e.key === "ArrowLeft" && index > 0)
      inputRefs.current[index - 1].focus();
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
            onChange={(e) =>
              handleInputChange(rowIndex, indexInput, e.target.value)
            }
          />
        </div>
      ))}
    </div>
  );
}
