
import { SlUserFollow } from "react-icons/sl";
import { BsBookmarkPlus, BsFillBookmarkCheckFill } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import { MdSpaceDashboard } from "react-icons/md";
import { FaRegHospital } from "react-icons/fa";
import { MdBedroomChild } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { RiAdminLine } from "react-icons/ri";
import { TbBed } from "react-icons/tb";
import { MdDashboardCustomize } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { FaPlusCircle } from "react-icons/fa";

function PatientSideBar(){
    return(
<>
<div  className={`sidebar`}>
          <div className="top_section">
            <h1  className="logo">
              MED
            </h1> &nbsp;<FaPlusCircle className="logIcon"/>
            <div
              className="bars"
            >
            </div>
          </div>
          
          <Link
                className="link"
                activeclassname="active"
                to={"/Patientdashboard"}
              >
                <div className="icon">
                  <MdSpaceDashboard className="mainIcon" />
                </div>
                <div
                  className="link_text"
                >
                   Dashboard
                </div>
              </Link>


          <Link
                className="link"
                activeclassname="active"
                to={"/patientprofile"}
              >
                <div className="icon">
                  <SlUserFollow className="mainIcon" />
                </div>
                <div
                  className="link_text"
                >
                  Profile
                </div>
              </Link>

              <Link
                className="link"
                activeclassname="active"
                to={"/allappointment"}
              >
                <div className="icon">
                  <BsFillBookmarkCheckFill className="mainIcon" />
                </div>
                <div
                  className="link_text"
                >
                 My Appointments
                </div>
              </Link>

              <Link
                className="link"
                activeclassname="active"
                to={"/prescription"}
              >
                <div className="icon">
                  <BiDetail className="mainIcon" />
                </div>
                <div
                  className="link_text"
                >
                   Reports
                </div>
              </Link>
          

              <Link className="link" activeclassname="active" to={"/"}>
              <div className="icon">
                <IoLogOutOutline className="mainIcon" />
              </div>
              <div
                className="link_text"
              >
                Logout
              </div>
            </Link>
</div>


</>

    );
}
export default PatientSideBar;