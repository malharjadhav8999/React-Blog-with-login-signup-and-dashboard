import React from "react";
import { useState, useEffect } from "react";
import ProjectCard from "./Card";
import Navbar1 from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  userDataFailure,
  userDataInitiate,
  userDataSuccess,
} from "../redux/users/action";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ title /*setIsLogin*/ }) => {
  // const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const userState = useSelector((state) => state.userReducer);
  console.log(userState);
  const dispatch = useDispatch();

  const { loader, userData, error } = userState;

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch(userDataInitiate());
    fetch("https://reqres.in/api/users", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // setUserData(data.data);
        dispatch(userDataSuccess(data.data));
      })
      .catch((err) => dispatch(userDataFailure(err)));
  }, []);

  // if (!userData) {
  //   return <div>Loading...</div>;
  // }

  const navigateToUserDetails = (userId) => {
    console.log(navigate);
    navigate(`/dashboard/${userId}`);
    console.log(navigate);
  };

  return (
    <div>
      {<Navbar1 /*setIsLogin={setIsLogin}*/ />}
      <h1>{title}</h1>
      {userData.map((user) => (
        <div onClick={() => navigateToUserDetails(user.id)}>
          <ProjectCard
            id={user.id}
            first_name={user.first_name}
            last_name={user.last_name}
            email={user.email}
            avatar={user.avatar}
          />
        </div>
      ))}
      ;
    </div>
  );
};

export default Dashboard;

//localStorage.removeItem("tokken");
