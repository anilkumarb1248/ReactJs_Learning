import React from "react";

const Book = (props) => {
  const bgColor = { backgroundColor: props.bgColor };
  console.log(bgColor);

  return (
    <>
      <section style={bgColor}>
        <h3>{props.title}</h3>
        <p>{props.author}</p>
      </section>
    </>
  );
  //   return (
  //     <>
  //       <h2> My Favourite Books</h2>
  //       <section style={{ backgroundColor: "red" }}>
  //         <h4>Mastering React</h4>
  //         <p>By Anthony Pham</p>
  //       </section>
  //       <section style={{ backgroundColor: "green" }}>
  //         <h4>Mastering React</h4>
  //         <p>By Anthony Pham</p>
  //       </section>
  //       <section style={{ backgroundColor: "blue" }}>
  //         <h4>Mastering React</h4>
  //         <p>By Anthony Pham</p>
  //       </section>
  //     </>
  //   );
};

export default Book;
