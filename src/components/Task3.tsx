"use client";

import React from "react";
import { useState } from "react";

export const Task3 = () => {
  const [number, setNumber] = useState(true);
  const changeNumber = () => {
    return setNumber(!number);
  };
  return (
    <div>
      <button onClick={changeNumber}>Show/Hide Text</button>
      {number == true && <p>Toggle me!</p>}
    </div>
  );
};
