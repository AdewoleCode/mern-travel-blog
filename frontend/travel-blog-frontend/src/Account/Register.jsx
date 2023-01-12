import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Account/Register.css'
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signUp } from "../api-helpers/helper";

export default function Register() {
  // const navigate = useNavigate();
  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

 
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword, name, email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if ( name === "" || name.length < 3) {
      toast.error(
        "name cannot be empty and must be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
     signUp(values).then(data => console.log(data)).catch(err => console.log(err))
      
    


      // const { email, name, password } = values;
      // const { data } = await axios.post('', {
      //   name,
      //   email,
      //   password,
      // });

    }
  }
;

return (
  <>
    <div className="form-container">
      <form action="" onSubmit={(event) => handleSubmit(event)}>

        <div className="brand">
          <h1>register</h1>
        </div>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={(e) => handleChange(e)}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Create User</button>
        <span>
          Already have an account ? <Link to="/login">Login.</Link>
        </span>
      </form>
    </div>
    <ToastContainer />
  </>
);
}

