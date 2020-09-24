import React from "react";
import "../Styles/Login.scss";
import Logo from "../Assets/logo.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useStateValue } from "../Utils/StateProvider";
import { actionTypes } from "../Utils/reducer";
function Login() {
  const [user, dispatch] = useStateValue();
  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img className="login__logo" src={Logo} alt="" />
        <h1> Sign in to Sync</h1>

        <Button onClick={signIn}>sign in with google</Button>
      </div>
    </div>
  );
}

export default Login;
