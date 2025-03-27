"use client";

import { useState } from "react";


export const Taskk2 = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
  <div>
       <Input onChange={handleChange} type="text" />
       <p>input text: {value}</p>
    </div>>
  );
};

// import { useState } from "react";

// function InputField() {
//   const [value, setValue] = useState("");

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   return (
//     <div>
//       <Input onChange={handleChange} type="text" />
//       <p>input text: {value}</p>
//     </div>
//   );
// }
