"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export const Task1 = () => {
  const [count, setCount] = useState(0);
  const IncreaseNumber = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Button onClick={IncreaseNumber}>increment</Button>
      <p>Count: {count}</p>
    </div>
  );
};
