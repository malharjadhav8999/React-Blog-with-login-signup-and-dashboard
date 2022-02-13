import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import {
  userDetailsDataFailure,
  userDetailsDataInitiate,
  userDetailsDataSuccess,
} from "../redux/userDetails/action";
import Navbar1 from "./Navbar";

const UserDetails = () => {
  const { userId } = useParams();
  // const [userData, setUserData] = useState([]);
  const userDetailsState = useSelector((state) => state.userDetailsReducer);
  const dispatch = useDispatch();
  const { loader, userData, error } = userDetailsState;

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch(userDetailsDataInitiate());
    fetch(`https://reqres.in/api/users/${userId}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // setUserData(data.data);
        dispatch(userDetailsDataSuccess(data.data));
        console.log(data);
      })
      .catch((err) => {
        dispatch(userDetailsDataFailure(err));
        console.log(err);
      });

    console.log(userData);
  }, []);

  console.log(userData);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar1 />
      <Container className="m-auto text-center">
        <h1 className="py-5">User Details</h1>

        <div>
          <img
            style={{ height: 300 }}
            src={userData.avatar}
            className="rounded-circle "
          ></img>
          <div>
            <h3>
              {userData.first_name} {userData.last_name}
            </h3>
            <div>ID : {userData.id}</div>
            <div>Email : {userData.email}</div>
          </div>
          {/* <div>{JSON.stringify(userData)}</div> */}
        </div>
      </Container>
    </>
  );
};

export default UserDetails;
