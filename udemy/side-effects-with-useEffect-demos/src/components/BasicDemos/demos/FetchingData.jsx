import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchingData() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("Fetching posts data from JSONPlaceHolder");
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h3>Fetching Data</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id} : {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchingData;
