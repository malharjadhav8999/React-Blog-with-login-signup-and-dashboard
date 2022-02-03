import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Login = () => {
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
        />
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
