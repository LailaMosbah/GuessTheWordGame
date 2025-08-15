import React, { useState } from "react";
import styles from "../styles/control.module.css";

export default function Controls({ checkWord }) {
  const [noOfHints, setNoOfHints] = useState(3);

  function useHint() {
    if (noOfHints > 0) setNoOfHints(noOfHints - 1);
  }

  return (
    <div className={styles.container}>
      <button className={styles.checkBtn} onClick={checkWord}>
        Check the Word
      </button>
      <button onClick={useHint} className={styles.checkhint}>
        <span>{noOfHints}</span> Hints
      </button>
    </div>
  );
}
