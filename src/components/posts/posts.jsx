import { useEffect, useState } from "react";
import Post from "../post/post";
import "./posts.css";
import { useSelector, useDispatch } from "react-redux";
import Navbar1 from "../Navbar";
import { Col, Row } from "reactstrap";
// import {
//   blogsFailure,
//   blogsInitiate,
//   blogsSuccess,
// } from "../redux/blogs/action";

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
      <Navbar1 />

      <h1 className="py-3 text-center ">{"  "}POSTS</h1>
      <Row>
        {postData.map((item) => {
          return (
            <Col md="4">
              <Post
                img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                description={item.body}
                title={item.title}
                userId={item.userId}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
