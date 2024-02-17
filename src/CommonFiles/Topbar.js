import React from "react";
import { BsFillGearFill } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import { MdNotificationsActive } from "react-icons/md";
import { ImMenu } from "react-icons/im";
import "./CommonCSS.css";
import { Link } from "react-router-dom";

function Topbar(){
  return (
    <>
      <div className="MainDiv">
      
        
        <Link className="link"  to={"/"}>
        <IoLogOutOutline className="mainIcon" />

              <div
                className="link_text"
              >
                Logout
              </div>
            </Link>
      </div>
    </>
  );
};

export default Topbar;
