import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("api/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <h5>
        Join Fwitter! </h5>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label className="userPassword">Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="userPassword">Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="userPassword">Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Sign Up
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Have an account? Login
        </Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
}
