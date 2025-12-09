import type { ChangeEvent } from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// export const Input = (props: InputProps) => {
//   return (
//     <div>
//       <input type="text" value={props.value} onChange={props.handleChange} />
//     </div>
//   );
// };

// export const Input = (props: InputProps) => {
export const Input = ({ value, handleChange }: InputProps) => {
  return (
    <div>
      {/* <input type="text" value={props.value} onChange={props.handleChange} /> */}
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

// export const Input = (props: InputProps) => {
//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     console.log(event.target.value);
//   };
//   return (
//     <div>
//       <input type="text" value={props.value} onChange={handleChange} />
//     </div>
//   );
// };
