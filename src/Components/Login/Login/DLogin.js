import React, { useState } from "react";
import { Radio } from "antd";
import admin from "./MEDC+ (1).png";
import "./DLogin.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function DLogin(){
const [mail, setMail]=useState()
const [password, setPassword]=useState()
const navigate = useNavigate();
const [placement, SetPlacement] = useState("");
  const placementChange = (e) => {
    SetPlacement(e.target.value);
    
  };

  const HandleSubmit = (e)=>{
    if(placement==="Admin"){

      return navigate("/Admindashboard");

    } else if(placement==="Doctor"){
      return navigate("/Doctordashboard");
    }else if(placement==="Patient"){
      e.preventDefault()
      axios.post('http://localhost:3001/patientLogin', {mail,password})
      .then(result =>{
        if(result.data === "Success"){
          navigate('/Patientdashboard')
        }else{
          alert("User/Password is not Valid")
        }
      })
    }else{
      alert("Select Type Of User");
    }
  };

  return (
    <>
      <div className="mainLoginPage">
        
        <div className="rightside">
          <h1>Hey,Welcome Back!!</h1>
          <div>
            <Radio.Group
            value={placement}
            onChange={placementChange}
            className={"radiogroup"}
            >
             
              <Radio.Button value="Patient" className={"radiobutton"}>
                Patient
              </Radio.Button>
              <Radio.Button value="Doctor" className={"radiobutton"}>
                Doctor
              </Radio.Button>
              <Radio.Button value="Admin" className={"radiobutton"}>
                Admin
              </Radio.Button>
            </Radio.Group>
          </div>
          <div className="Profileimg">
            <img src={admin} alt="profile" />
          </div>
          <div>
           
            <form onSubmit={HandleSubmit}>
              <h3>Email</h3>
              <input
                type="text"
                name="ID"
                onChange={(e) => setMail(e.target.value)}
                required
              />
              <h3>Password</h3>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">LOGIN</button><br/><br/>
              
              <Link to={"/signupp"} className="signlink"><h4>New Patient Registration? Click Here</h4></Link>
              

            </form>
          </div>
          

        </div>
      </div>
      
    </>
  );
};

export default DLogin;

