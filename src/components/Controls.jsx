import React from "react";
import styles from "../styles/control.module.css";

export default function Controls({ checkWord, onHint, hintsRemaining }) {
  return (
    <div className={styles.container}>
      <button className={styles.checkBtn} onClick={checkWord}>
        Check the Word
      </button>
      <button
        onClick={onHint}
        className={styles.checkhint}
        disabled={hintsRemaining === 0}
      >
        <span>{hintsRemaining}</span> Hints
      </button>
    </div>
  );
}
