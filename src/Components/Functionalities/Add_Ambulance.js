import React, { useState } from "react";
import Sidebar from "../../Components/Dashboard/AdminSideBar";
import './Add_Doctor.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaAmbulance } from "react-icons/fa";
import axios from "axios";
const notify = (text) => toast(text);
function AddAmbulance(){

  const [number, setNumber]=useState()
  const [type, setType]=useState()

  const Submit = (e) =>{

    e.preventDefault();
    axios.post("http://localhost:3001/createAmbulance", {number,type})
    alert("Ambulance Added Successfully")
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
            <h1>Add Ambulance</h1>&nbsp;  <FaAmbulance className="overviewIcon" />
            <form onSubmit={Submit}>
              <div>
                <label> Vehicle Number</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Vehicle Registeration Number"
                    name="docName"
                    onChange={(e) => setNumber(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label>Ambulance Type</label>
                <div className="inputdiv">
                  <select
                    name="type"
                    onChange={(e) => setType(e.target.value)}
                    required
                  >
                    <option value="Not Defined">Select</option>
                    <option value="Basic">Basic</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Transport">Transport</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="formsubmitbutton">
                Add Ambulance
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAmbulance;
