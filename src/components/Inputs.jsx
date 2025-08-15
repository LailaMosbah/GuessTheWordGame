import React from "react";
import InputTry from "./InputTry";
import styles from "../styles/inputs.module.css";

export default function Inputs({ tries, currentTry, handleInputChange }) {
  return (
    <>
      {tries.map((row, indexTry) => (
        <div key={indexTry} className={styles.containerInput}>
          <p className={styles.indexWord}>Try {indexTry + 1} :</p>
          <InputTry
            isActive={indexTry === currentTry}
            row={row}
            rowIndex={indexTry}
            handleInputChange={handleInputChange}
          />
        </div>
      ))}
    </>
  );
}
