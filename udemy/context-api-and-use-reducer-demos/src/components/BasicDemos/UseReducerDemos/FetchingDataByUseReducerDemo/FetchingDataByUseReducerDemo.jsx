import React from "react";
import DataFetchingByUseStateDemo from "./DataFetchingByUseStateDemo";
import DataFetchingByUseReducerDemo from "./DataFetchingByUseReducerDemo";

function FetchingDataByUseReducerDemo() {
  return (
    <div>
      <h2>Fetching Data from API endpoint by UseReducer - Demo</h2>
      <DataFetchingByUseStateDemo />
      <hr />
      <DataFetchingByUseReducerDemo />
    </div>
  );
}

export default FetchingDataByUseReducerDemo;
