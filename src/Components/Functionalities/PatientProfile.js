import pic from "../../img/user-picture.png"
import React from "react";
import Sidebar from "../Dashboard/PatientSideBar";
import "./Profile.css"
function PatientProfile(){
    return(

        <div className="container">
          <Sidebar />
          <div className="AfterSideBar">
          <div class="carde">
    <img src={pic}></img>
    <h1>Mathew Dev</h1>
    <p class="title">Patient</p>
    <p><b>Mobile : 8976543215</b></p>
    <p><b>Mail : mathew@gmail.com</b></p>
  <br></br>
    <p><button>Update</button></p>
    <br></br>
  </div>
  </div>
  </div>
           
       
     

    );
};
export default PatientProfile;