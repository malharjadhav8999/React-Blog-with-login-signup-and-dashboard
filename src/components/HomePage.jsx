import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  let navigate = useNavigate();
  return (
    <>
      <h1>HomePage</h1>
      <Button
        type="submit"
        onClick={() => {
          navigate("./login");
        }}
      >
        Login
      </Button>

      <Button
        type="submit"
        onClick={() => {
          navigate("./sign_up");
        }}
      >
        Sign Up
      </Button>
    </>
  );
};

export default HomePage;
