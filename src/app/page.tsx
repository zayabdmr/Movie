"use client";

import { Taskk1 } from "@/components/Taskk1";
import { Taskk2 } from "@/components/Taskk2";
import { Input } from "@/components/ui/input";

// import { Footer } from "@/components/Footer";
// import { Nav } from "@/components/Nav";
// import { Popular } from "@/components/Popular";
// import { Poster } from "@/components/Poster";
// import { TopRated } from "@/components/TopRated";
// import { Upcoming } from "@/components/Upcoming";

import * as React from "react";

// export default function Home() {
//   return (
//     <div>
//       <Nav />
//       <Poster />
//       <Upcoming />
//       <Popular />
//       <TopRated />
//       <Footer />
//     </div>
//   );
// }

// daalgavr
// 1. increment darah uyd count nemegdeh
// 2. input deer ym bichih uyd utgiig doorn haruulna
// 3. button deer darah uyd alga bolgood butsaaj haruulna
// 4.

// 11111111111111111111111111111111111

export default function Home() {
  return (
    <div>
      <Taskk1 />
      <Taskk2 />
    </div>
  );
}

// console.log(Taskk1);

// 22222222222222222222222222222222

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

// export default InputField;

// 3333333333333333333333333333333

// import React from "react";
// import { useState } from "react";

// function ToggleVisiblity() {
//   const [number, setNumber] = useState("true");
//   const changeNumber = () => {
//     return setNumber(!number);
//   };

//   return (
//     <div>
//       <button onClick={changeNumber}>Show/Hide Text</button>
//       {number == true && <p>Toggle me!</p>}
//     </div>
//   );
// }

// export default ToggleVisiblity;
