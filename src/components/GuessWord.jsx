import React from "react";
import GameArea from "./GameArea";
import KeyColors from "./KeyColors";

import styles from "../styles/guessWord.module.css";

export default function GuessWord() {
  return (
    <>
      <div className={styles.container}>
        <GameArea />
        <KeyColors />
      </div>
    </>
  );
}
