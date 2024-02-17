import React, { useState } from "react";
import Sidebar from "../../Components/Dashboard/AdminSideBar";
import './Add_Doctor.css'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
import axios from "axios";

const notify = (text) => toast(text);
function AddAdmin(){

  const [name, setName]=useState()
  const [mobile, setMobile]=useState()
  const [email, setEmail]=useState()
  const [userName, setUserName]=useState()
  const [password, setPassword]=useState()

  const Submit = (e) =>{

    e.preventDefault();
    axios.post("http://localhost:3001/createAdmin", {name,mobile,email,userName,password})
    alert("Admin Added Successfully")
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
            <h1>Add Admin</h1>
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
                    type="text"
                    placeholder="Enter email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Create UserName</label>
                <div className="inputdiv">
                 <input type="text" placeholder="Set UserName"
                 onChange={(e) => setUserName(e.target.value)}
                 />
                </div>
              </div>

              <div>
                <label> Create Password</label>
                <div className="inputdiv">
                  <input
                    type="password"
                    placeholder="Set Password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
              </div>
              <button type="submit" className="formsubmitbutton">
                Add Admin
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAdmin;
