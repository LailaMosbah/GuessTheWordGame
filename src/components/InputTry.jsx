import React from "react";

export default function InputTry() {
  let numberOfLetters = 6;

  return (
    <div>
      {Array.from({ length: numberOfLetters }).map((_, indexInput) => (
        <div key={indexInput}>
          <input type="text" maxLength={1} />
        </div>
      ))}
    </div>
  );
}
