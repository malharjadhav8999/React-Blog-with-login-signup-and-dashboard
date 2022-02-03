import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import validator from "validator";

const Login = () => {
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  return (
    <Form inline id="login_form">
      <FormGroup id="email">
        <Label for="exampleEmail" hidden>
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="email"
          onChange={(e) => validateEmail(e)}
        />
        <span
          style={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          {emailError}
        </span>
      </FormGroup>{" "}
      <FormGroup id="pass">
        <Label for="examplePassword" hidden>
          Password
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Password"
          type="password"
        />
      </FormGroup>{" "}
      <div id="Submit">
        <Button id="submit">Submit</Button>
        <Button
          type="reset"
          id="reset"
          //       onClick={(e) => {
          //           e.preventDefault()
          //   document.getElementById("examplePassword").innerHTML = "";
          // }}
        >
          Reset
        </Button>
      </div>
    </Form>
  );
};

export default Login;
