import React, { useState } from "react";
import Sidebar from "../../Components/Dashboard/AdminSideBar";
import './Add_Doctor.css'
import { FaUserDoctor } from "react-icons/fa6";
import doctor from "../../img/doctoravatar.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
import axios from "axios";
const notify = (text) => toast(text);
function AddNurse(){

  const [name, setName]=useState()
  const [mobile, setMobile]=useState()
  const [email, setEmail]=useState()
  const [gender, setGender]=useState()

  const Submit = (e) =>{

    e.preventDefault();
    axios.post("http://localhost:3001/createNurse", {name,mobile,email,gender})
    alert("Nurse Added Successfully")
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (
    <>
      <ToastContainer />
      <div className="container">
        <Sidebar/>
        <div className="AfterSideBar">
          <div className="Main_Add_Doctor_div">
            <h1>Nurse Details</h1>
            <form onSubmit={Submit}>
              <div>
                <label> Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="docName"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label>Mobile Number</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Mobile Number"
                    name="mobile"
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Email</label>
                <div className="inputdiv">
                  <input
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Gender</label>
                <div className="inputdiv">
                  <select
                    name="gender"
                    onChange={(e) => setGender(e.target.value)}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

            

             
                
              <button type="submit" className="formsubmitbutton">
                Add Nurse
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNurse;
