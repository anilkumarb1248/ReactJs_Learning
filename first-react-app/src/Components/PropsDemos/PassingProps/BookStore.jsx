import React from "react";
import Book from "./Book";

function BookStore() {
  return (
    <div>
      {/* <Book /> */}
      <h3> My Favourite Books</h3>
      <Book title="Mastering React" author="Anthony Pham" bgColor="red" />
      <Book title="Practical React" author="Alex Johnson" bgColor="green" />
      <Book title="React in Action" author="Bob Climo" bgColor="blue" />
    </div>
  );
}

export default BookStore;
