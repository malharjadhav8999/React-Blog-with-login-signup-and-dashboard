import { useEffect, useState } from "react";
import Post from "../post/post";
import "./posts.css";

export default function Posts() {
  let [postData, setPostData] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log("his");
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(">>>>>>>>>>>>>>>>>>>>>>> ", data);

        setPostData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  //   console.log(postData[0]);

  if (!postData) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <h1>POSTS</h1>

      {postData.map((item) => {
        return (
          <Post
            img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            description={item.body}
            title={item.title}
            userId={item.userId}
          />
        );
      })}
    </>
  );
}
