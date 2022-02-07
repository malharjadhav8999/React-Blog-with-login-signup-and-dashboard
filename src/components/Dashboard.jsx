import React from "react";
import { useState, useEffect } from "react";
import ProjectCard from "./Card";
import Navbar1 from "./Navbar";

const Dashboard = ({setIsLogin}) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("https://reqres.in/api/users", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.data);
      });
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
