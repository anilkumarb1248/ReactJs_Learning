import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initalState = {
  loading: true,
  post: {},
  error: "",
};

const dataReducer = (currentState, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FAILURE":
      return {
        loading: false,
        post: {},
        error: "Something went wrong!",
      };
    default:
      currentState;
  }
};

function DataFetchingByUseReducerDemo() {
  const [state, dispatch] = useReducer(dataReducer, initalState);

  useEffect(() => {
    console.log("Fetching post details by id 1");
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      // axios.get(`https://jsonplaceholder.typicode.com/posts/200`) // This will return error
      .then((response) => {
        setTimeout(() => {
          dispatch({ type: "SUCCESS", payload: response.data });
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setTimeout(() => {
          dispatch({ type: "FAILURE" });
        }, 2000);
      });
  }, []);

  return (
    <div>
      <h3>
        <b>Data Fetching by UseReducer Demo</b>
      </h3>
      {state.loading ? "Loading..." : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingByUseReducerDemo;
