import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetchingByUseStateDemo() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    console.log("Fetching post details by id 1");
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      // axios.get(`https://jsonplaceholder.typicode.com/posts/200`) // This will return error
      .then((response) => {
        setTimeout(() => {
          setLoading(false);
          setError("");
          setPost(response.data);
        }, 2000);
      })
      .catch((error) => {
        setTimeout(() => {
          setLoading(false);
          setPost({});
          setError("Something went wrong!, error: ", error);
        }, 2000);
      });
  }, []);

  return (
    <div>
      <h3>Data Fetching By UseState Demo</h3>
      {loading ? "Loading..." : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingByUseStateDemo;
