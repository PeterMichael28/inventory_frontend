import React from "react";
import {  useSelector } from "react-redux";


import {  selectName } from "../../store/features/auth/authSlice.js";

const Header = () => {
 

  const name = useSelector( selectName );


  return (
    <div className="--pad header">
      <div className="--flex-between">
        <h3 className='text-header --flex-center'>
          <span className="--fw-thin">Welcome, </span>
          <span className="--color-danger">{name}</span>
        </h3>
        
      </div>
      <hr />
    </div>
  );
};

export default Header;
