import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  userDetailsDataFailure,
  userDetailsDataInitiate,
  userDetailsDataSuccess,
} from "../redux/userDetails/action";

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
      <p>User Details</p>
      <h2>
        {userData.first_name} {userData.last_name}
      </h2>

      <div style={{ display: "flex" }}>
        <img style={{ height: 100 }} src={userData.avatar}></img>
        <div>
          <div>ID:: {userData.id}</div>
          <div>Email: {userData.eamil}</div>
        </div>
        <div>{JSON.stringify(userData)}</div>
      </div>
    </>
  );
};

export default UserDetails;
