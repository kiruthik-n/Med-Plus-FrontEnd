import { AiOutlineUserAdd } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { BiSolidBookmarkPlus } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHospitalUser } from "react-icons/fa";
import { TbReportMedical } from "react-icons/tb";
import { FaBedPulse } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { MdSpaceDashboard } from "react-icons/md";
import { TbBed } from "react-icons/tb";
import { MdDashboardCustomize } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";


function DoctorSideBar(){
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
                to={"/Doctordashboard"}
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
                to={"/doctorprofile"}
              >
                <div className="icon">
                  <ImProfile className="mainIcon" />
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
                to={"/viewappointment"}
              >
                <div className="icon">
                  <BiSolidBookmarkPlus className="mainIcon" />
                </div>
                <div
                  className="link_text"
                >
                  Appointments
                </div>
              </Link>

            

              <Link className="link" activeclassname="active" to={"/beds"}>
              <div className="icon">
                <FaBedPulse className="mainIcon" />
              </div>
              <div
                className="link_text"
              >
                Beds
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
export default DoctorSideBar;