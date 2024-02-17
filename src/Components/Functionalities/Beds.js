import React from "react";
import { Table } from "antd";
import Sidebar from "../Dashboard/DoctorSideBar";
import "./Appointment.css"
function Beds(){
    return(
  <>
        <div className="container">
          <Sidebar />
          <div className="AfterSideBar">
            <div className="Payment_Page">
              <h1 style={{ marginBottom: "2rem" , textAlign:"center" }}>Bed Details</h1>
              <div className="patientBox">
                <table >
                  <thead>
                    <tr>
                      <th>Patient Name</th>
                      <th>Email</th>
                      <th>Room No</th>
                      <th>Bed No</th>
                      <th>Doctor</th>
                      
                      <th>Discharge?</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                     
                        <tr>
                          <td>Dinesh</td>
                          <td>abc@gmail.com</td>
                          <td>2</td>
                          <td>3a</td>
                          <td>yyyy</td>
                          
                          <td>
                            <button onClick={()=>{alert("Patient Discharged!!");}}
                           
                            >
                              Discharge
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Ragul</td>
                          <td>def@gmail.com</td>
                          <td>1</td>
                          <td>5</td>
                          <td>zzzz</td>
                         
                          <td>
                            <button
                              
                            
                            >
                              Discharge
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Ram</td>
                          <td>ghi@gmail.com</td>
                          <td>1</td>
                          <td>5</td>
                          <td>yyyy</td>
                        
                          <td>
                            <button
                         
                            >
                              Discharge
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Sri Sai</td>
                          <td>jkl@gmail.com</td>
                          <td>1</td>
                          <td>5</td>
                          <td>xxxx</td>
                          
                          <td>
                            <button
                           
                            >
                              Discharge
                            </button>
                          </td>
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
export default Beds;