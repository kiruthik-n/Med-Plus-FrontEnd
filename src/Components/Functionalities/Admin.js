import React, { useEffect, useState } from "react";
import { Table } from "antd";
import Sidebar from "../Dashboard/AdminSideBar";
import "./Appointment.css"
import axios from "axios";
function Admin(){

  const [admins,setAdmins]=useState([])

  useEffect(() => {

    axios.get('http://localhost:3001/Admin')
    .then(result => setAdmins(result.data))
    .catch(err => console.log(err))

  }, [])

    return(

  <>
        <div className="container">
          <Sidebar />
          <div className="AfterSideBar">
            <div className="Payment_Page">
              <h1 style={{ marginBottom: "2rem" , textAlign:"center" }}>Admin Details</h1>
              <div className="patientBox">
                <table >
                  <thead>
                    <tr>
                      <th>Admin Name</th>
                      <th>Mobile</th>
                      <th>Mail</th>
                    
                    </tr>
                  </thead>
                  <tbody>
                    {

                      admins.map((admin) =>{

                        return <tr>

                          <td>{admin.name}</td>
                          <td>{admin.mobile}</td>
                          <td>{admin.email}</td>

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
export default Admin;