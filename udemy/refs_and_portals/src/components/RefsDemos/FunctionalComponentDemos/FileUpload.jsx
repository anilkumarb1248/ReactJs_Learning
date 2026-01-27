import React, { useRef } from "react";

import "./FileUpload.css";

function FileUpload() {
  const fileRef = useRef();
  const handleBtnClick = () => {
    fileRef.current.click();
  };
  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input
          data-testid="file-picker"
          type="file"
          accept="image/*"
          ref={fileRef}
        />
        <button onClick={handleBtnClick}>Pick Image</button>
      </p>
    </div>
  );
}

export default FileUpload;
