import React from "react";
import "./CommonCSS.css";
import { FaUserDoctor } from "react-icons/fa6";
import { GiNurseFemale } from "react-icons/gi";
import { RiEmpathizeLine } from "react-icons/ri";
import { FaBedPulse } from "react-icons/fa6";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaAmbulance } from "react-icons/fa";
import { BiSolidBookmarkPlus } from "react-icons/bi";
import { TbReportMedical } from "react-icons/tb";
import { RiAdminLine } from "react-icons/ri";
import AdminSideBar from "../Components/Dashboard/AdminSideBar";
import DoctorSideBar from "../Components/Dashboard/DoctorSideBar";

function FrontPage(){
  return (
    <>
     <div className="container">
      
      <DoctorSideBar/>
      
        <div className="AfterSideBar">
       
          <div className="maindiv">
            
            <div className="one commondiv">
              <div>
                <h1>7</h1>
                <p>Doctor</p>
              </div>
              <FaUserDoctor className="overviewIcon" />
            </div>
            <div className="two commondiv">
              {" "}
              <div>
                <h1>37</h1>
                <p>Nurse</p>
              </div>
              <GiNurseFemale className="overviewIcon" />
            </div>
            <div className="three commondiv">
              <div>
                <h1>32</h1>
                <p>Patient</p>
              </div>
              <RiEmpathizeLine className="overviewIcon" />
            </div>
            
            <div className="four commondiv">
              {" "}
              <div>
                <h1>58</h1>
                <p>Beds</p>
              </div>
              <FaBedPulse className="overviewIcon" />
            </div>
  
            <div className="five commondiv">
              {" "}
              <div>
                <h1>64</h1>
                <p>Ambulance</p>
              </div>
              <FaAmbulance className="overviewIcon" />
            </div>
            <div className="six commondiv">
              {" "}
              <div>
                <h1>7</h1>
                <p>Appointment</p>
              </div>
              <BiSolidBookmarkPlus className="overviewIcon" />
            </div>
           
          </div>
         
        </div>
      </div>
    </>
   
  );
};

export default FrontPage;
