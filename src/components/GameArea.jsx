import React from "react";
import Inputs from "./Inputs";
import Controls from "./Controls";
import Message from "./Message";

export default function GameArea() {
  return (
    <>
      <div>
        <Inputs />
        <Controls />
        <Message />
      </div>
    </>
  );
}
