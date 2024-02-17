import { AiOutlineUserAdd } from "react-icons/ai";
import { FaAmbulance } from "react-icons/fa";
import { GiNurseFemale } from "react-icons/gi";
import { MdSpaceDashboard } from "react-icons/md";
import { BsBookmarkPlus, BsFillBookmarkCheckFill } from "react-icons/bs";
import { FaHospitalUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiAdminLine } from "react-icons/ri";
import { TbBed } from "react-icons/tb";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { FaPlusCircle } from "react-icons/fa";
function AdminSideBar(){
    return(

        <>
        
       <div className={'sidebar'}>
       <div className="top_section">
            <h1  className="logo">
              MED
            </h1>&nbsp; <FaPlusCircle className="logIcon"/>
            <div
              className="bars"
            >
            </div>
          </div>


          <Link
                className="link"
                activeclassname="active"
                to={"/Admindashboard"}
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
                to={"/adminappointment"}
              >
                <div className="icon">
                  <BsFillBookmarkCheckFill className="mainIcon" />
                </div>
                <div
                  className="link_text"
                >
                  Appointments
                </div>
              </Link>

          <Link
                className="link"
                activeclassname="active"
                to={"/addpatient"}
              >
                <div className="icon">
                  <FaHospitalUser className="mainIcon" />
                </div>
                <div
                  className="link_text"
                >
                  Add Patient
                </div>
              </Link>

       <Link className="link" activeclassname="active" to={"/adddoctor"}>
                <div className="icon">
                  <AiOutlineUserAdd className="mainIcon" />
                </div>
                <div
                  className="link_text"
                >
                  Add Doctor
                </div>
              </Link>

              <Link className="link" activeclassname="active" to={"/addnurse"}>
                <div className="icon">
                  <GiNurseFemale className="mainIcon" />
                </div>
                <div
                  className="link_text"
                >
                  Add Nurse
                </div>
              </Link>

              <Link className="link" activeclassname="active" to={"/addadmin"}>
                <div className="icon">
                  <RiAdminLine
                    className="mainIcon"
                    style={{ color: "white" }}
                  />
                </div>
                <div
                  className="link_text"
                >
                  Add Admin
                </div>
              </Link>

              <Link
                className="link"
                activeclassname="active"
                to={"/ambulance"}
              >
                <div className="icon">
                  <FaAmbulance className="mainIcon" />
                </div>
                <div
                  className="link_text"
                >
                 Add AMBULANCE
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
export default AdminSideBar;