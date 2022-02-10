import React, { useState, useReducer } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import validator from "validator";
//import { useNavigate } from "react";
import { Link, useNavigate } from "react-router-dom";

// -----------------------------------------------------------------------

const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
  submit: true,
};

const loginConstants = {
  setEmail: "SET_EMAIL",
  setPassword: "SET_PASSWORD",
  setEmailError: "SET_EMAIL_ERROR",
  setPasswordError: "SET_PASSWORD_ERROR",
  setSubmit: "SET_SUBMIT",
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case loginConstants.setEmail: {
      return {
        ...state,
        email: payload,
      };
    }

    case loginConstants.setPassword: {
      return {
        ...state,
        password: payload,
      };
    }

    case loginConstants.setEmailError: {
      return {
        ...state,
        emailError: payload,
      };
    }

    case loginConstants.setPasswordError: {
      return {
        ...state,
        passwordError: payload,
      };
    }

    case loginConstants.setSubmit: {
      return {
        ...state,
        submit: payload,
      };
    }

    default: {
      return state;
    }
  }
};

// -----------------------------------------------------------------------

const Login = ({ setIsLogin }) => {
  let navigate = useNavigate();

  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");

  // const [email, setEmail]USERS_DATA_ = useState("");
  // const [password, setPassword] = useState("");

  // const [submit, setSubmit] = useState(true);

  // -----------------------------------------------------------------------

  const [state, dispatch] = useReducer(reducer, initialState);
  const { email, password, emailError, passwordError, submit } = state;

  // -----------------------------------------------------------------------

  const validateEmail = () => {
    console.log(validator.isEmail(email));

    if (validator.isEmail(email)) {
      // setEmailError("Valid Email :)");
      console.log("this is validemail", email);
      dispatch({
        type: loginConstants.setEmailError,
        payload: (
          <p
            style={{
              fontWeight: "bold",
              color: "green",
            }}
          >
            {"Valid Email :)"}),
          </p>
        ),
      });
      return true;
    } else {
      // setEmailError("Enter valid Email!");
      console.log("this is unvalidemail", email);
      dispatch({
        type: loginConstants.setEmailError,
        payload: (
          <p
            style={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            {"Enter valid Email!"}),
          </p>
        ),
      });
    }
    return false;
  };

  // -----------------------------------------------------------------------

  const validatePassword = () => {
    if (
      validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      // setPasswordError("Is Strong Password");
      console.log("this is valid stromg passward", password);
      dispatch({
        type: loginConstants.Set,
        payload: "Is Strong Password",
      });

      return true;
    } else {
      console.log("this is unvalid stromg passward", password);
      // setPasswordError("Is Not Strong Password");
      dispatch({
        type: loginConstants.setPasswordError,
        payload: (
          <p
            style={{
              fontWeight: "bold",
              color: "green",
            }}
          >
            {"Is Not Strong Password"},{/* {emailError} */}
          </p>
        ),
      });
    }
    return false;
  };

  // -----------------------------------------------------------------------

  const submitHandler = async (e) => {
    e.preventDefault();
    // var f = validatePassword();
    var m = validateEmail();
    if (m) {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
        
      };
      console.log(password);
      console.log(requestOptions);
      fetch("https://reqres.in/api/login", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("token", data.token);
          // setIsLogin(true);

          navigate("/dashboard");
        });
    }
    console.log(emailError, "hello");

    // const { data } = await fetch("");
    // console.log(data);
  };

  // -----------------------------------------------------------------------

  // -----------------------title------------------------------------------------

  return (
    <Form inline id="login_form" className="col-md-4 m-auto" onSubmit={submitHandler}>
      <FormGroup id="email" style={{ display: "flex" }}>
        <Label for="exampleEmail" hidden>
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="text"
          onChange={(e) =>
            dispatch({
              type: loginConstants.setEmail,
              payload: e.target.value,
            })
          }
          // setEmail(e.target.value)}
          value={email}
        />
        <Button
          onClick={(e) =>
            dispatch({
              type: loginConstants.setEmail,
              payload: "",
            })
          }
          // setPassword("")
        >
          X
        </Button>
        {/* <span
          style={{
            fontWeight: "bold",
            color: "white",
          }}
        >
          {emailError}
        </span> */}
      </FormGroup>
      <span
        style={{
          fontWeight: "bold",
          color: "white",
        }}
      >
        {emailError}
      </span>
      {/* ----------------------------------------------------------------------- */}
      <FormGroup id="pass" style={{ display: "flex" }}>
        <Label for="examplePassword" hidden>
          Password
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Password"
          type="password"
          onChange={(e) =>
            dispatch({
              type: loginConstants.setPassword,
              payload: e.target.value,
            })
          }
          // setPassword(e.target.value)}
          value={password}
        />

        <Button
          onClick={(e) =>
            dispatch({
              type: loginConstants.setPassword,
              payload: "",
            })
          }
          // setPassword("")
        >
          X
        </Button>

        <span
          style={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          {passwordError}
        </span>

        {/* ----------------------------------------------------------------------- */}
      </FormGroup>{" "}
      <Button type="submit">Login</Button>
      {/* ----------------------------------------------------------------------- */}
      <Button
        type="reset"
        id="reset"
        onClick={(e) => {
          e.preventDefault();
          // setEmail("");
          // setPassword("");

          dispatch({
            type: loginConstants.setEmail,
            payload: "",
          });

          dispatch({
            type: loginConstants.setPassword,
            payload: "",
          });
        }}
      >
        Reset
      </Button>
    </Form>
  );
};

export default Login;
