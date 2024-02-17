import React from "react";
import { useState,useEffect } from "react"
import axios from "axios";
import Sidebar from "../Dashboard/AdminSideBar";
import "./Appointment.css"
function Nurses(){

  
  const [nurses,setNurses]=useState([])

  useEffect(() => {

    axios.get('http://localhost:3001/Nurse')
    .then(result => setNurses(result.data))
    .catch(err => console.log(err))

  }, [])

    return(
  <>
        <div className="container">
          <Sidebar />
          <div className="AfterSideBar">
            <div className="Payment_Page">
              <h1 style={{ marginBottom: "2rem" , textAlign:"center" }}>Nurse Details</h1>
              <div className="patientBox">
                <table >
                  <thead>
                    <tr>
                      <th>Nurse Name</th>
                      <th>Mobile</th>
                      <th>Mail</th>                      
                      <th>Remove?</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                      {

                      nurses.map((nurse) =>{

                        return <tr>

                          <td>{nurse.name}</td>
                          <td>{nurse.mobile}</td>
                          <td>{nurse.email}</td>
                          <td><button>Remove</button></td>

                        </tr>
                      })

                    }
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>

    )
}
export default Nurses;