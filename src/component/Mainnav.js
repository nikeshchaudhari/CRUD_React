import React from "react";
import "../App.css";
import { Link, Outlet } from "react-router-dom";

const Mainnav = () => {
  return (
    <div className="wrapper">
      <div className="side-bar">
        <Link to={'/category'} style={{color:'white',display:'block',textDecoration:'none',padding:'20px'}}>Catagory</Link>
        <Link to={'/add-category'} style={{color:'white',display:'block',textDecoration:'none'}}  >Add Catagory</Link>
      </div>
      <div className="contnent">
       <Outlet/>
      </div>
    </div>
  );
};

export default Mainnav;
