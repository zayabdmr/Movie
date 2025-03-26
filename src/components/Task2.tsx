"use client";
import { useState } from "react";
import { Input } from "./ui/input";

export const Task2 = () => {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);

  return (
    <div>
      <Input onChange={handleChange} type="text" />
      <p>input text: {value}</p>
    </div>
  );
};

// useState нь React Hook бөгөөд компонентын дотор хувьсагч (state) үүсгэж, түүний утгыг хадгалах, шинэчлэхэд ашигладаг.
