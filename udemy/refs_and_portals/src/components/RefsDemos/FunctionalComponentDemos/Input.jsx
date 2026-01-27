import React from "react";

function Input({ ref, label, ...props }) {
  return (
    <p className="control">
      <label>{label}</label>
      <input {...props} ref={ref} />
    </p>
  );
}
// ** In older versions, we have to use forwardRef
// const Input = React.forwardRef(function Input({ label, ...props }, ref) {
//   return (
//     <p className="control">
//       <label>{label}</label>
//       <input {...props} ref={ref} />
//     </p>
//   );
// });

export default Input;
