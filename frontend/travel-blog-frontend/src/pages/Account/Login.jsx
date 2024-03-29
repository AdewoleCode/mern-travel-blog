import React, { useState } from "react";
import '../Account/Register.css'
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../api-helpers/helper";
import { authActions } from "../../store/store";
import { useDispatch } from "react-redux";


export default function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [values, setValues] = useState({ name: "", password: "" });
  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const onAfterLogin = (data) => {
    localStorage.setItem('userId', data.id)
    dispatch(authActions.login())
    toast.success('Login succesful!', toastOptions)
    navigate('/diaries')
  }

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
      login(values)
        .then(onAfterLogin)
        .catch(err => {
          toast.error(err.response.data.message, toastOptions)
        })
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

