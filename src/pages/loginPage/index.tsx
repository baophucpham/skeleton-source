import React from "react";
import LoginStyle from "./style";
// import { useNavigate } from "react-router-dom";
import images from "../../asset/image";

const Login = () => {
  // const navigate = useNavigate();

  const loginAction = () => {
    // navigate("/");
  };
  return (
    <LoginStyle>
      <img alt="" className="imageBackground" src={images.ygtBackgroundImage} />
      <div className="fromLogin">
        <img alt="" className="LogoIMG" src={images.logoYGT} />
        <div className="titleLogin">Login</div>
        <div className="titleLogin">
          <div className="inputStyle">Email or Username</div>
          <input className="userName" />
          <div className="inputStyle">Password</div>
          <input />
        </div>
        <button onClick={() => loginAction()}>Login</button>
      </div>
    </LoginStyle>
  );
};

export default Login;
