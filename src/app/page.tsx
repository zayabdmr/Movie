"use client";
import * as React from "react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Popular } from "@/components/Popular";
import { Poster } from "@/components/Poster";
import { TopRated } from "@/components/TopRated";
import { Upcoming } from "@/components/Upcoming";

export default function Home() {
  return (
    <div>
      <Nav />
      <Poster />
      <Upcoming />
      <Popular />
      <TopRated />
      <Footer />
    </div>
  );
}

// import { Task1 } from "@/components/Task1";
// import { Task2 } from "@/components/Task2";
// import { Task3 } from "@/components/Task3";

// daalgavr
// 1. increment darah uyd count nemegdeh
// 2. input deer ym bichih uyd utgiig doorn haruulna
// 3. button deer darah uyd alga bolgood butsaaj haruulna
// 4. input dtr ym bicheed bichsen usegnii toog gargah

// export default function Home() {
//   return (
//     <div>
//       <Task1 />
//       <Task2 />
//       <Task3 />
//     </div>
//   );
// }

// // 11111111111111111111111111111111
// import { useState } from "react";

// function taskk1() {
//   const [count, setCount] = useState(0);
//   const IncreaseNumber = () => setCount(count + 1);
// };
//  return (
//     <div>
//       <Button onClick={IncreaseNumber}>increment</Button>
//       <p>Count: {count}</p>
//     </div>
//   );
// };

// export default taskk1;

// 22222222222222222222222222222222
// import { useState } from "react";
// import { Input } from "@/components/ui/input";

// function taskk2() {
//   const [value, setValue] = useState("");
//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <div>
//       <Input onChange={handleChange} type="text" />
//       <p>input text: {value}</p>
//     </div>
//   );
// }

// export default taskk2;

// // 3333333333333333333333333333333
// import React from "react";
// import { useState } from "react";

// function taskk3() {
//   const [number, setNumber] = useState(true);
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

// export default taskk3;

// 55555555555555555
// color change

// import React from "react";

// function taskk5() {
//   return (
//     <div>
//       <select>
//         <option>red</option>
//         <option>green</option>
//         <option>blue</option>
//         <option>yellow</option>
//       </select>
//     </div>
//   );
// }

// export default taskk5;

// import React from "react";

// function taskk5() {
//   const printText = (id: string) => {};

//   return (
//     <div>
//       <button
//         onClick={() => printText("purple-400")}
//         className="size-10 bg-purple-400"
//       ></button>
//       <button
//         onClick={() => printText("purple-500")}
//         className="size-10 bg-purple-500"
//       ></button>
//       <button
//         onClick={() => printText("purple-600")}
//         className="size-10 bg-purple-600"
//       ></button>
//       <button
//         onClick={() => printText("purple-700")}
//         className="size-10 bg-purple-700"
//       ></button>
//     </div>
//   );
// }

// export default taskk5;
