import { useEffect, useState } from "react";
import sideBarImg from "../imgs/dl.png";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [users, setUsers] = useState([]);

  const emails = users.map((user) => user.email);
  const passwords = users.map((user) => user.password);
  

  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    if (loginEmail.length > 1) {
      if (loginPassword.length > 3) {
        if (emails.find((email) => email === loginEmail)) {
          if (passwords.find((password) => password === loginPassword)) {
            Swal.fire({
              icon: "success",
              title: "welcome back",
              text: "log in successful",
              confirmButtonText: "thanks!",
            });
            navigate("/");
          } else {
            Swal.fire({
              icon: "error",
              title: "check details",
              text: "password is not correct",
              confirmButtonText: "ok!",
            });
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "check details",
            text: "Email is not already registered",
            confirmButtonText: "ok!",
          });
        }
      } else if (loginPassword.length < 3 && loginPassword.length > 0) {
        Swal.fire({
          icon: "error",
          title: "check details",
          text: "password must be at least 3 chars",
          confirmButtonText: "ok!",
        });
      } else if (loginPassword.length == 0) {
        Swal.fire({
          icon: "error",
          title: "check details",
          text: "please enter your password",
          confirmButtonText: "ok!",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "check details",
        text: "please enter your email",
        confirmButtonText: "ok!",
      });
    }
  }

  console.log(emails);
  console.log(passwords);
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="LogIn">
      <div className="imgBox ">
        <img src={sideBarImg} />
      </div>
      <div className="sign-up-form">
        <h1>log in to your account</h1>
        <p>Enter your details below</p>
        <form>
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />

          <button className="log-in-btn" type="submit" onClick={submit}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
