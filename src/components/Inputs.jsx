import React from "react";
import InputTry from "./InputTry";

export default function Inputs() {
  let numberOfTries = 6;
  // let currentTry = 1;

  return (
    <>
      {Array.from({ length: numberOfTries }).map((_, indexTry) => (
        <div key={indexTry}>
          <span>{indexTry + 1}</span>
          <InputTry />
        </div>
      ))}
    </>
  );
}
