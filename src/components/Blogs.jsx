import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar1 from "./Navbar";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardImgOverlay,
} from "reactstrap";



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
    // <div className="">
    //   <Navbar1 />
    //   {/* <h1>Blog</h1> */}
    //   <h2>Blog Id - {userData.id}</h2>
    //   <h3>User Id - {userData.userId}</h3>

    //   <div style={{ display: "flex" }}>
    //     <div>
    //       <div>Title : {userData.title}</div>
    //       <div>Description : {userData.body}</div>
    //     </div>
    //     {/* <div>{JSON.stringify(userData)}</div> */}
    //   </div>
    // </div>

    //---------------------------------------------------------------------------------------
    <>
      <Navbar1 />
      {/* <Card>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
          className=""
        />
        <CardBody>
          <CardTitle tag="h4">
            <h1> {userData.title}</h1>
          </CardTitle>
          <span>
            <h4 style={{ color: "grey" }} className="pt-3">
              Blog Id - {userData.id} User Id - {userData.userId}
            </h4>
          </span>
          
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
    </> */}
      {/* //--------------------------------------------------------------------------------------- */}
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          width="100%"
          height="550"
        />

        <CardImgOverlay>
          <CardTitle tag="h3">{userData.title}</CardTitle>
        </CardImgOverlay>
        <CardBody>
          <h4 style={{ color: "grey" }} className="pt-3">
            Blog Id - {userData.id} User Id - {userData.userId}
          </h4>
          <CardText style={{ color: "grey" }}>
            <b>Description - </b>
            {userData.body}
          </CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
    </>
  );
};

export default Blogs;

// usersData.mP(E => card data={e})
