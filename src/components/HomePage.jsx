import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  let navigate = useNavigate();
  return (
    <div
      style={{
        // backgroundImage: `url("https://p0.pikist.com/photos/491/263/winter-new-year-s-eve-new-year-s-day-atmosphere-silent-turn-of-the-year-background-sphere-black.jpg")`,
        // minHeight: "500px",
        // backgroundSize: "cover"
      }}
      className="d-flex justify-content-between align-items-center flex-column p-1 m-1"
    >
      <h1 className="pb-5">HomePage</h1>
      <div>
        <Button
          type="submit"
          onClick={() => {
            navigate("./login");
          }}
          color="success"
        >
          Login
        </Button>{" "}
        <Button
          type="submit"
          onClick={() => {
            navigate("./sign_up");
          }}
          color="primary"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
