import React, { useEffect } from "react";
import PrivatePageStyle from "./style";
import { useSelector } from "react-redux";
import { isAuthSelector } from "src/redux/selectors/authenSelector";

const PrivatePage = () => {
   const isAuthen = useSelector(isAuthSelector);
   console.log(isAuthen);
  const naviLoginPage = () => {
    // navigate("/");
  };
  return (
    <PrivatePageStyle>
      <div className="title">PrivatePage</div>
      <div style={{background:'red'}}>fdskfhdskjhjkhkjhkj</div>
      <button onClick={() => naviLoginPage()}>Login</button>
      <div className="title">PrivatePage</div>
      <div style={{background:'red'}}>fdskfhdskjhjkhkjhkj</div>
      <button onClick={() => naviLoginPage()}>Login</button>
      <div className="title">PrivatePage</div>
      <div style={{background:'red'}}>fdskfhdskjhjkhkjhkj</div>
      <button onClick={() => naviLoginPage()}>Login</button>
      <div className="title">PrivatePage</div>
      <div style={{background:'red'}}>fdskfhdskjhjkhkjhkj</div>
      <button onClick={() => naviLoginPage()}>Login</button>
      

      <div className="title">PrivatePage</div>
      <div style={{background:'red'}}>fdskfhdskjhjkhkjhkj</div>
      <button onClick={() => naviLoginPage()}>Login</button>
      <div className="title">PrivatePage</div>
      <div style={{background:'red'}}>fdskfhdskjhjkhkjhkj</div>
      <button onClick={() => naviLoginPage()}>Login</button>
      <div className="title">PrivatePage</div>
      <div style={{background:'red'}}>fdskfhdskjhjkhkjhkj</div>
      <button onClick={() => naviLoginPage()}>Login</button>
      <div className="title">PrivatePage</div>
      <div style={{background:'red'}}>fdskfhdskjhjkhkjhkj</div>
      <button onClick={() => naviLoginPage()}>Login</button><div className="title">PrivatePage</div>
      <div style={{background:'red'}}>fdskfhdskjhjkhkjhkj</div>
      <button onClick={() => naviLoginPage()}>Login</button>
      <div className="title">PrivatePage</div>
      <div style={{background:'red'}}>fdskfhdskjhjkhkjhkj</div>
      <button onClick={() => naviLoginPage()}>Login</button>
      <div className="title">PrivatePage</div>
      <div style={{background:'red'}}>fdskfhdskjhjkhkjhkj</div>
      <button onClick={() => naviLoginPage()}>Login</button>
      <div className="title">PrivatePage</div>
      <div style={{background:'red'}}>fdskfhdskjhjkhkjhkj</div>
      <button onClick={() => naviLoginPage()}>Login</button><div className="title">PrivatePage</div>
      <div style={{background:'red'}}>fdskfhdskjhjkhkjhkj</div>
      <button onClick={() => naviLoginPage()}>Login</button>
      <div className="title">PrivatePage</div>
      <div style={{background:'red'}}>fdskfhdskjhjkhkjhkj</div>
      <button onClick={() => naviLoginPage()}>Login</button>
      <div className="title">PrivatePage</div>
      <div style={{background:'red'}}>fdskfhdskjhjkhkjhkj</div>
      <button onClick={() => naviLoginPage()}>Login</button>
      <div className="title">PrivatePage</div>
      <div style={{background:'red'}}>fdskfhdskjhjkhkjhkj</div>
      <button onClick={() => naviLoginPage()}>Login</button>

    </PrivatePageStyle>
  );
};

export default PrivatePage;
