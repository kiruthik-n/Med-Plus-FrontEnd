import React from "react";
import { Table } from "antd";
import Sidebar from "../Dashboard/DoctorSideBar";
import "./Appointment.css"
function Doctors(){
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
                      <th>Experience</th>
                      
                      
                    </tr>
                  </thead>
                  <tbody>
                    
                     
                        <tr>
                          <td>Dinesh</td>
                          <td>9876543212</td>
                          <td>xxx</td>
                          <td>Department</td>
                          <td>10yrs</td>
                         
                        </tr>
                        <tr>
                          <td>Ragul</td>
                          <td>7896454123</td>
                          <td>xxxxx</td>
                          <td>Department</td>
                          <td>7yrs</td>
                         
                        </tr>
                        <tr>
                          <td>Ram</td>
                          <td>654789321</td>
                          <td>xxxxx</td>
                          <td>Department</td>
                          <td>6yrs</td>
                        
                        </tr>
                        <tr>
                          <td>Sri Sai</td>
                          <td>9873216543</td>
                          <td>xxxxx</td>
                          <td>Department</td>
                          <td>13yrs</td>
                        
                        </tr>
                      
                    
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