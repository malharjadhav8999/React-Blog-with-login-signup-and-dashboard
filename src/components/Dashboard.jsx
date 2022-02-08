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

const Dashboard = ({ setIsLogin }) => {
  // const [userData, setUserData] = useState([]);
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

  return (
    <div>
      {<Navbar1 setIsLogin={setIsLogin} />}

      {userData.map((e) => (
        <ProjectCard
          id={e.id}
          first_name={e.first_name}
          last_name={e.last_name}
          email={e.email}
          avatar={e.avatar}
        />
      ))}
    </div>
  );
};

export default Dashboard;

//localStorage.removeItem("tokken");
