import React from "react";
import { Table } from "antd";
import Sidebar from "../Dashboard/AdminSideBar";
import "./Appointment.css"
function AdminAppointment(){
    return(
  <>
        <div className="container">
          <Sidebar />
          <div className="AfterSideBar">
            <div className="Payment_Page">
              <h1 style={{ marginBottom: "2rem" , textAlign:"center" }}>Appointment Details</h1>
              <div className="patientBox">
                <table >
                  <thead>
                    <tr>
                      <th>Patient Name</th>
                      <th>Mobile</th>
                      <th>Disease</th>
                      <th>Department</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Delete?</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                     
                        <tr>
                          <td>Dinesh</td>
                          <td>9876543212</td>
                          <td>Disease</td>
                          <td>Department</td>
                          <td>22/12/23</td>
                          <td>Time</td>
                          <td>
                            <button onClick={()=>{alert("Appointment Deleted!!");}}
                           
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Ragul</td>
                          <td>7896454123</td>
                          <td>Disease</td>
                          <td>Department</td>
                          <td>22/12/23</td>
                          <td>Time</td>
                          <td>
                          <button onClick={()=>{alert("Appointment Deleted!!");}}
                           
                           >
                             Delete
                           </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Ram</td>
                          <td>654789321</td>
                          <td>Disease</td>
                          <td>Department</td>
                          <td>22/12/23</td>
                          <td>Time</td>
                          <td>
                          <button onClick={()=>{alert("Appointment Deleted!!");}}
                           
                           >
                             Delete
                           </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Sri Sai</td>
                          <td>9873216543</td>
                          <td>Disease</td>
                          <td>Department</td>
                          <td>22/12/23</td>
                          <td>Time</td>
                          <td>
                          <button onClick={()=>{alert("Appointment Deleted!!");}}
                           
                           >
                             Delete
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
export default AdminAppointment;