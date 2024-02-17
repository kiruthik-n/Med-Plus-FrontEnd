import React, { useEffect, useState } from "react";
import { Table } from "antd";
import Sidebar from "../Dashboard/AdminSideBar";
import "./Appointment.css"
import axios from "axios";
function Doctors(){

  const [doctors,setDoctors]=useState([])

  useEffect(() => {

    axios.get('http://localhost:3001/Doctor')
    .then(result => setDoctors(result.data))
    .catch(err => console.log(err))

  }, [])



    return(

  <>
        <div className="container">
          <Sidebar />
          <div className="AfterSideBar">
            <div className="Payment_Page">
              <h1 style={{ marginBottom: "2rem" , textAlign:"center" }}>Doctor Details</h1>
              <div className="patientBox">
                <table >
                  <thead>
                    <tr>
                      <th>Doctor Name</th>
                      <th>Mobile</th>
                      <th>Mail</th>
                      <th>Department</th>
                     
                      <th>Remove?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {

                      doctors.map((doctor) =>{

                        return <tr>

                          <td>{doctor.name}</td>
                          <td>{doctor.mobile}</td>
                          <td>{doctor.email}</td>
                          <td>{doctor.department}</td>
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
export default Doctors;