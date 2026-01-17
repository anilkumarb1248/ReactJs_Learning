import React from "react";

function Section({ title, children, ...props }) {
  return (
    <div {...props}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Section;
