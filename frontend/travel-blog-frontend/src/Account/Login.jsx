import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Account/Register.css'
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../api-helpers/helper";
import { authActions } from "../store/store";
import { useDispatch } from "react-redux";


export default function Login() {

  const dispatch = useDispatch()

  // const navigate = useNavigate();
  const [values, setValues] = useState({ name: "", password: "" });
  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };


  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { email, password } = values;
    if (email === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      login(values).then(data=> localStorage.setItem('userId', data.id))
      .then(()=> dispatch(authActions.login()))
      .catch(err=> console.log(err))
    }

  };

  

  return (
    <>
      <div className="form-container">
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <h1>Login</h1>
          </div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Log In</button>
          <span>
            Don't have an account ? <Link to="/register">Register.</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

