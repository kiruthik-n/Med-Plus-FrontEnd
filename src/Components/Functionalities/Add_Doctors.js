import React, { useState } from "react";
import Sidebar from "../../Components/Dashboard/AdminSideBar";
import './Add_Doctor.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
import axios from "axios";
const notify = (text) => toast(text);
function AddDoctor(){

  const [name, setName]=useState()
  const [age, setAge]=useState()
  const [mobile, setMobile]=useState()
  const [email, setEmail]=useState()
  const [gender, setGender]=useState()
  const [dob, setDob]=useState()
  const [education, setEducation]=useState()
  const [department, setDepartment]=useState()
  const [fees, setFees]=useState()
  const [userName, setUserName]=useState()
  const [password, setPassword]=useState()

  const Submit = (e) =>{

    e.preventDefault();
    axios.post("http://localhost:3001/createDoctor", {name,age,mobile,email,gender,dob,education,department,fees,userName,password})
    alert("Doctor Added Successfully")
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
            <h1>Doctor Information</h1>
            <form onSubmit={Submit}>
              <div>
                <label>Doctor Name</label>
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
                <label>Age</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Age"
                    name="age"
                    onChange={(e) => setAge(e.target.value)}
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
                    <option value="Choose Gender">Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div>
                <label>D.O.B</label>
                <div className="inputdiv">
                  <input
                    type="date"
                    placeholder="dd-mm-yy"
                    name="DOB"
                    required
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <label>Education</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="eg.MBBS"
                    name="education"
                    onChange={(e) => setEducation(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Department</label>
                <div className="inputdiv">
                  <select
                    name="department"
                    onChange={(e) => setDepartment(e.target.value)}
                    required
                  >
                    <option value="General">Select</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="ENT">ENT</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Psychiatrist">Psychiatrist</option>
                    
                  </select>
                </div>
              </div>

              <div>
                <label>Consultation Fees</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="eg: 300₹"
                    name="education"
                    onChange={(e) => setFees(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Create UserName</label>
                <div className="inputdiv">
                 <input type="text" placeholder="Set UserName"  onChange={(e) => setUserName(e.target.value)}/>
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
                Add Doctor
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDoctor;
