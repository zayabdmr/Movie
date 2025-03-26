import { useState } from "react";

function InputField(){
    const[value, setValue] = useState("");

    const handleChange = (e) => { setValue(e.target.value); }
})

  return (
    <div>
      <Input
onChange={handleChange} type="text"
      />
          <p>input text: {value}</p>
    </div>
  );
};

export default InputField;