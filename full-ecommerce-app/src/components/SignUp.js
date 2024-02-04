import { useState } from "react";
import sideBarImg from "../imgs/dl.png";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPasswordText, setConfirmPasswordText] = useState("");

  const navigate = useNavigate();

  function Submit(e) {
    if (password === confirmPasswordText) {
      e.preventDefault();
      axios.post("http://localhost:8000/users", {
        name: name,
        email: email,
        password: password,
      });

      Swal.fire({
        title: "account creation",
        text: "your account has successfully created",
        icon: "success",
        confirmButtonText: "thanks!",
      });
      navigate("/log-in");
    } else {
      e.preventDefault();
      Swal.fire({
        title: "Check Details",
        text: "password does not match",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }
  return (
    <div className="sign-up  ">
      <div className="imgBox ">
        <img src={sideBarImg} />
      </div>
      <div className="sign-up-form">
        <h1>Create an account</h1>
        <p>Enter your details below</p>

        <form>
          <input
            placeholder="Name"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            placeholder="Confirm Password"
            type="password"
            onChange={(e) => {
              setConfirmPasswordText(e.target.value);
            }}
          />

          <button className="create-account-btn" type="submit" onClick={Submit}>
            Create Account
          </button>
        </form>
        <p>
          Already have an account? <Link to={"/log-in"}>log in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
