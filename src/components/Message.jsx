import React from "react";
import styles from "../styles/message.module.css";

export default function Message({ message }) {
  return message ? <h2 className={styles.message}>{message}</h2> : null;
}
