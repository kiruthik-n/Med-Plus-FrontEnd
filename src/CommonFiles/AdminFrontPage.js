import React from "react";
import "./CommonCSS.css";
import { useNavigate } from "react-router-dom";
import { FaUserDoctor } from "react-icons/fa6";
import { GiNurseFemale } from "react-icons/gi";
import { RiEmpathizeLine } from "react-icons/ri";
import { FaBedPulse } from "react-icons/fa6";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaAmbulance } from "react-icons/fa";
import { BiSolidBookmarkPlus } from "react-icons/bi";
import { TbReportMedical } from "react-icons/tb";
import { RiAdminLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import AdminSideBar from "../Components/Dashboard/AdminSideBar";

function FrontPage(){
  const navigate=useNavigate();
  return (
    <div className="container">
    <AdminSideBar/>
      <div className="AfterSideBar">
        <div className="maindiv">
        <Link to={'/doctors'}>
         <div className="one commondiv" >
           
           <div>
              <h1>7</h1>
              <p>Doctor</p>
            </div>
        
            <FaUserDoctor className="overviewIcon" />
          </div>
          </Link>
          <Link to={'/nurses'}>
          <div className="two commondiv">
            {" "}
            <div>
              <h1>37</h1>
              <p>Nurse</p>
            </div>
            <GiNurseFemale className="overviewIcon" />
          </div>
          </Link>
         <Link to={'/patients'}>
         <div className="three commondiv">
            <div>
              <h1>32</h1>
              <p>Patient</p>
            </div>
            <RiEmpathizeLine className="overviewIcon" />
          </div>
         </Link>
         <Link to={'/admin'}>
         <div className="six commondiv">
            {" "}
            <div>
              <h1>1</h1>
              <p>Admin</p>
            </div>
            <RiAdminLine className="overviewIcon" />
          </div>
         </Link>
         <Link to={"/beddetails"}>
         <div className="four commondiv">
            <div>
              <h1>58</h1>
              <p>Beds</p>
            </div>
            <FaBedPulse className="overviewIcon" />
          </div>
         </Link>

          <Link to={"/ambulancedetails"}>
          <div className="five commondiv">
            <div>
              <h1>64</h1>
              <p>Ambulance</p>
            </div>
            <FaAmbulance className="overviewIcon" />
          </div>
         
          </Link>
         
        </div>
       
      </div>
    </div>
  );
};

export default FrontPage;
