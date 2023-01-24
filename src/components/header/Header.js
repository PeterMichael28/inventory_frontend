import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logoutUser } from "../../services/authService";
import {  selectName, SET_LOGIN } from "../../store/features/auth/authSlice.js";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector( selectName );

  


  const logout = async () => {
  const res =  await logoutUser();
    await dispatch( SET_LOGIN( false ) );
    // toast.success(res.message)
    // console.log(res)
    navigate("/login");
  };


  return (
    <div className="--pad header">
      <div className="--flex-between">
        <h3>
          <span className="--fw-thin">Welcome, </span>
          <span className="--color-danger">{name}</span>
        </h3>
        <button onClick={logout} className="--btn --btn-danger">
          Logout
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Header;
