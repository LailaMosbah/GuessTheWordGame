import React from "react";
import styles from "../styles/keyColor.module.css";

export default function KeyColor({ keyColor, keyText }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.keyColor} style={{ background: keyColor }}></div>
        <div className={styles.keyText}>{keyText}</div>
      </div>
    </>
  );
}
