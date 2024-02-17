import React, { useState } from "react";
import { message, Upload } from "antd";
import doctor from "../../img/doctoravatar.png";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import Sidebar from "../Dashboard/AdminSideBar";
import { Navigate } from "react-router-dom";

const notify = (text) => toast(text);

function Add_Patient(){
  return (
    <>
      <ToastContainer />
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Main_Add_Doctor_div">
            <h1>Add Patient</h1>

            <form >
              {/* Name PlaceHolder */}
              <div>
                <label>Patient Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="patientName"
                  
                    required
                  />
                </div>
              </div>
              {/* AGE PLACEHOLDER  */}
              <div>
                <label>Age</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Age"
                    name="age"
                
                    required
                  />
                </div>
              </div>
              {/* EMAIL PLACEHOLDER  */}
              <div>
                <label>Email</label>
                <div className="inputdiv">
                  <input
                    type="email"
                    placeholder="abc@gmail.com"
                    name="email"
                  
                    required
                  />
                </div>
              </div>
           
              {/* GENDER PLACEHOLDER  */}
              <div>
                <label>Gender</label>
                <div className="inputdiv">
                  <select
                    name="gender"
             
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              {/* DATE OF BIRTH  */}
              <div className="dateofAppointment">
                <p>Birth Date</p>
                <div className="inputdiv">
                  <input
                    type={"date"}
                    placeholder="Choose Date"
                    name="DOB"
             
                    required
                  />
                </div>
              </div>
              {/* MOBILE PLACEHOLDER */}
              <div>
                <label>Contact Number</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Mobile Number"
                    name="mobile"
              
                    required
                  />
                </div>
              </div>

             

              <div>
                <label>Disease</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Disease"
                    name="disease"
                 
                    required
                  />
                </div>
              </div>

              {/* ADDRESS SECTION  */}
              <div>
                <label>Address</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                 
                    required
                  />
                </div>
              </div>

              <div>
                <label>Bed Number</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Bed No"
                    name="bedNumber"
               />
                </div>
              </div>
              <div>
                <label>Room Number</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Room no"
                    name="roomNumber"
                
                  />
                </div>
              </div>

             
              

              <div>
                <label>Patient Blood Group</label>
                <div className="inputdiv">
                  <select
                    name="bloodGroup"
                    required
                  >
                    <option value="">Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>
              {/* PASSWORD*/}
              <div className="dateofAppointment">
                <p>Create UserName</p>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Create UserName"
                    name="username"
               
                    required
                  />
                </div>
              </div>
              <div className="dateofAppointment">
                <p>Password</p>
                <div className="inputdiv">
                  <input
                    type="password"
                    placeholder="Set Password"
                    name="password"
               
                    required
                  />
                </div>
              </div>
            

              <button
                type="submit"
                className="formsubmitbutton"
                style={{ width: "20%" }}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add_Patient;
