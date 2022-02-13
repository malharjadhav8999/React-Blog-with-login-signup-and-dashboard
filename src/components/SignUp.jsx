import React, { useReducer } from "react";
// import Yup from "yup";
import * as yup from "yup";

import validator from "validator";

import { useNavigate } from "react-router-dom";

// -----------------------------------------------------------------------

const initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  submit: true,
};

const loginConstants = {
  setEmail: "SET_EMAIL",
  setPassword: "SET_PASSWORD",
  setFirstName: "SET_FIRST_NAME",
  setLastName: "SET_LAST_NAME",
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

    case loginConstants.setFirstName: {
      return {
        ...state,
        emailError: payload,
      };
    }

    case loginConstants.setLastName: {
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

// -----------------------------------------------------------------------

// -----------------------------------------------------------------------

const clearEmailField = () => {};
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------

const Validation = (email, password, firstName, lastName) => {
  let schema = yup.object().shape({
    firstName: yup.string().email().required(),
    lastName: yup.string().url().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),

    // createdOn: Yup.date().default(function () {
    //   return new Date();
    //}),
  });

  return schema
    .validate({ email, password, firstName, lastName })
    .then(() => {
      console.log("abc");
      return true;
    })
    .catch(function (err) {
      return err;
      //   err.name; // => 'ValidationError'
      //   err.errors; // => ['Deve ser maior que 18']
    });
};

// -----------------------------------------------------------------------

const SignUp = () => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialState);
  const { email, password, firstName, lastName } = state;

  const onSignUp = (e) => {
    // e.preventDefault();

    console.log(e.target.email.value);

    Validation(email, password, firstName, lastName).then((data) => {
      console.log(data);
    });

    // if (Validation(email, password, firstName, lastName)) {
    //   navigate("/dashboard");
    // }

    // let schema = yup.object().shape({
    //   firstName: yup.string().email().required(),
    //   lastName: yup.string().url().required(),
    //   email: yup.string().email().required(),
    //   password: yup.string().min(8).required(),

    //   // createdOn: Yup.date().default(function () {
    //   //   return new Date();
    //   //}),
    // });

    // schema
    //   .validate({ email, password, firstName, lastName })
    //   .then(() => {
    //     console.log("abc");
    //   })
    //   .catch(function (err) {
    //     //   err.name; // => 'ValidationError'
    //     //   err.errors; // => ['Deve ser maior que 18']
    //   });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSignUp(e);
        }}
      >
        <h3 className="pt-4 pb-3">Sign Up</h3>
        <div className="form-group pt-2">
          <label className="py-1">First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="form-group pt-2">
          <label className="py-1">Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="form-group pt-2">
          <label for="email" className="py-1">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group pt-2 pb-5">
          <label className="py-1">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-block "
          // onClick={() => navigate("/dashboard")}
          // className="py-1"
        >
          Sign Up
        </button>
        <p className="forgot-password text-right pt-2">
          Already registered{" "}
          <span
            onClick={() => {
              navigate("/login");
            }}
            style={{
              color: "blue",
            }}
          >
            sign in?
          </span>
        </p>
      </form>
    </>
  );
};

export default SignUp;
