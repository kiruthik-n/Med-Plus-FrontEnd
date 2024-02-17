import React from "react";
import Sidebar from "../Dashboard/DoctorSideBar";
import "./Appointment.css"
function Nurses(){
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
                      <th>Department</th>                      
      
                    </tr>
                  </thead>
                  <tbody>
                    
                     
                        <tr>
                          <td>Dinesh</td>
                          <td>9876543212</td>
                          <td>xxx</td>
                          <td>Department</td>
                        
                        </tr>
                        <tr>
                          <td>Ragul</td>
                          <td>7896454123</td>
                          <td>xxxxx</td>
                          <td>Department</td>
                        
                        </tr>
                        <tr>
                          <td>Ram</td>
                          <td>654789321</td>
                          <td>xxxxx</td>
                          <td>Department</td>
                          
                        </tr>
                        <tr>
                          <td>zzzz</td>
                          <td>9873216543</td>
                          <td>xxxxx</td>
                          <td>Department</td>
                          
                        </tr>
                        <tr>
                          <td>Yazhini</td>
                          <td>9873216543</td>
                          <td>xxxxx</td>
                          <td>Department</td>
                      
                        </tr>
                        <tr>
                          <td>Akshaya</td>
                          <td>9873216543</td>
                          <td>xxxxx</td>
                          <td>Department</td>
                        
                        </tr>
                        <tr>
                          <td>Malini</td>
                          <td>9873216543</td>
                          <td>xxxxx</td>
                          <td>Department</td>
                        
                        </tr>
                        <tr>
                          <td>shalini</td>
                          <td>9873216543</td>
                          <td>xxxxx</td>
                          <td>Department</td>
                        
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
export default Nurses;