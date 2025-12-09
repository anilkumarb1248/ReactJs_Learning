import { useState, type ChangeEvent } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export default function EventProps() {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };
  return (
    <div>
      <h2>*** Event Props **** </h2>
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <Input value={value} handleChange={(event) => handleChange(event)} />
    </div>
  );
}
