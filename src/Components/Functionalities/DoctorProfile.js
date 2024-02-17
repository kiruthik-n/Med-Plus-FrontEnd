import pic from "../../img/user-picture.png"
import React from "react";
import Sidebar from "../Dashboard/DoctorSideBar";
import "./Profile.css"
function DocProfile(){
    return(

        <div className="container">
          <Sidebar />
          <div className="AfterSideBar">
          <div class="carde">
    <img src={pic}></img>
    <h1>John Doe</h1>
    <p class="title">Diabetics Specialist</p>
    <p>15 years Experience</p>
    <p><b>Mobile : 9876543215</b></p>
    <p><b>Mail : john@gmail.com</b></p>
  <br></br>
    <p><button>Update</button></p>
    <br></br>
  </div>
  </div>
  </div>
           
       
     

    );
};
export default DocProfile;