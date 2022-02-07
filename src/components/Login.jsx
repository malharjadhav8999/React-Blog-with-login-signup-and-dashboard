import React, { useState, useReducer } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import validator from "validator";
//import { useNavigate } from "react";

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
  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const [submit, setSubmit] = useState(true);

  // -----------------------------------------------------------------------

  const [state, dispatch] = useReducer(reducer, initialState);
  const { email, password, emailError, passwordError, submit } = state;

  // -----------------------------------------------------------------------

  const validateEmail = () => {
    console.log(email);

    if (validator.isEmail(email)) {
      // setEmailError("Valid Email :)");
      dispatch({ type: loginConstants.emailError, payload: "Valid Email :)" });
      return true;
    } else {
      // setEmailError("Enter valid Email!");
      dispatch({
        type: loginConstants.emailError,
        payload: "Enter valid Email!",
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
      dispatch({
        type: loginConstants.passwordError,
        payload: "Is Strong Password",
      });

      return true;
    } else {
      // setPasswordError("Is Not Strong Password");
      dispatch({
        type: loginConstants.passwordError,
        payload: "Is Not Strong Password",
      });
    }
    return false;
  };

  // -----------------------------------------------------------------------

  const submitHandler = async (e) => {
    e.preventDefault();
    if (validateEmail()) {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      };
      fetch("https://reqres.in/api/login", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("token", data.token);
          setIsLogin(true);
        });
    }
    // const { data } = await fetch("");
    // console.log(data);
  };

  // -----------------------------------------------------------------------

  // -----------------------------------------------------------------------

  return (
    <Form inline id="login_form" onSubmit={submitHandler}>
      <FormGroup id="email">
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
        <span
          style={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          {emailError}
        </span>
      </FormGroup>
      {/* ----------------------------------------------------------------------- */}
      <FormGroup id="pass">
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
