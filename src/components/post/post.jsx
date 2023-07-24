import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function post() {
    console.log('Post.jsx');

  const { id } = useParams();
  const [post, setPost] = useState([]);

  const baseURL = "https://jsonplaceholder.typicode.com/posts/"+id;
//   const postId = parseInt(id);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  return (
    <div>
      <h1>Post Id: {post.id}</h1>
      <h1>Post Title: {post.title}</h1>
      <h1>Post Body: {post.body}</h1>
    </div>
  );
}

export default post;
