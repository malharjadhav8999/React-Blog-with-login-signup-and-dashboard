import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Blogs = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(
      `https://jsonplaceholder.typicode.com/posts/${userId}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);
  console.log(userData);

  return (
    <>
      {/* <h1>Blog</h1> */}
      <h2>Blog Id - {userData.id}</h2>
      <h3>User Id - {userData.userId}</h3>

      <div style={{ display: "flex" }}>
        <div>
          <div>Title : {userData.title}</div>
          <div>Description : {userData.body}</div>
        </div>
        {/* <div>{JSON.stringify(userData)}</div> */}
      </div>
    </>
  );
};

export default Blogs;

// usersData.mP(E => card data={e})
