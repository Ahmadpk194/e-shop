import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { signUp, signIn } from "./firebase";
import { useAuth } from "./firebase";

function Login() {
  // const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const signIn = (e) => {
  //   e.preventDefault();

  //   auth
  //     .signInWithEmailAndPassword(email, password)
  //     .then((auth) => {
  //       navigate("/");
  //     })
  //     .catch((error) => alert(error.message));
  // };

  // const register = (e) => {
  //   e.preventDefault();

  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((auth) => {
  //       if (auth) {
  //         navigate("/");
  //       }
  //     })
  //     .catch((error) => alert(error.message));
  // };

  async function handleSignUp() {
    try {
      await signUp(email, password).then((auth) => {
        if (auth) {
          navigate("/");
        }
      });
    } catch (err) {
      alert(err);
    }
  }

  async function signIn() {
    try {
      await signIn(email, password).then((auth) => {
        navigate("/");
      });
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="login">
      <Link to="/login" style={{ textDecoration: "none" }}>
        <div className="login__logo">
          <StorefrontIcon className="login__logoImage" fontSize="large" />
          <h2 className="login__logoTitle">eSHOP</h2>
        </div>
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the eShop Website Conditions of Use & Sale.
          Please see our Privacy Notice.
        </p>
        <button className="login__registerButton" onClick={handleSignUp}>
          Create your eShop Account
        </button>
      </div>
    </div>
  );
}

export default Login;
