import React, { useEffect } from "react";
import PrivatePageStyle from "./style";
// import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const PrivatePage = () => {
  // const navigate = useNavigate();
  // const myCookie = Cookies.get("cookie_name");
  // console.log(myCookie);

  // useEffect(()=>{
  //   if(myCookie){
  //       navigate("/");
  //   }else{
  //       navigate("/login")
  //   }
  // },[])

  const loginAction = () => {
    // navigate("/");
  };
  return (
    <PrivatePageStyle>
      <div className="title">PrivatePage</div>
      <button onClick={() => loginAction()}>Login</button>
    </PrivatePageStyle>
  );
};

export default PrivatePage;
