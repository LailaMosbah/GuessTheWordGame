import React from "react";
import KeyColor from "./KeyColor";
import styles from "../styles/keyColors.module.css";

export default function KeyColors() {
  return (
    <>
      <div className={styles.container}>
        <h2 style={{ textAlign: "center", color: "#5934e0" }}>Key Colors</h2>
        <KeyColor
          keyColor="green"
          keyText="Letter is Correct and In Correct Place"
        />
        <KeyColor
          keyColor="yellow"
          keyText="Letter is Correct but In Wrong Place"
        />
        <KeyColor keyColor="red" keyText="Letter is Wrong" />
      </div>
    </>
  );
}
