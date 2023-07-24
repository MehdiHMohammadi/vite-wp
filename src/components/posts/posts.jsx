import { useState, useEffect } from "react";
import BlogCard from "../cards/blogCard";
import HeaderPosts from "./headerPosts";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/";
let linkPhoto1 = "https://dummyimage.com/720x400";

function Posts() {
  console.log('Posts.jsx');

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPosts(response.data);
    });
  }, []);

  // function showPost(id) {
  //   // console.log('Click Shod!!!!')
  //   window.location.href = "/post/" + id;
  // }
  if (!posts) return console.log("Not Posts in page ....!!!?");
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <HeaderPosts />
        {/* ******************************* */}
        <div className="flex flex-wrap -m-4 hover:cursor-pointer">
          {posts.map((item, index) => {
            return (
              
                <BlogCard
                  key={index}
                  blog={item}
                  index={index}
                  image={linkPhoto1}
                />
            );
          })}
        </div>
        {/* ******************************* */}
      </div>
    </section>
  );
}

export default Posts;
