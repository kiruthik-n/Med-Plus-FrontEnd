import React from "react";
import { Table } from "antd";
import Sidebar from "../Dashboard/AdminSideBar";
import "./Appointment.css"
function BedDetails(){
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
                      <th>Room Number</th>
                      <th>Bed Number</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                     
                        <tr>
                          <td>1A</td>
                          <td>7</td>
                          <td>Available</td>
                          
                          
                        
                        </tr>
                        <tr>
                          <td>2A</td>
                          <td>9</td>
                          <td>Occupied</td>
                       
                        </tr>
                        <tr>
                          <td>4C</td>
                          <td>19</td>
                          <td>Available</td>
                          
                        </tr>
                        <tr>
                          <td>5A</td>
                          <td>19</td>
                          <td>Occupied</td>
                         
                        </tr>
                        <tr>
                          <td>8K</td>
                          <td>32</td>
                          <td>Available</td>
                         
                        </tr>
                        <tr>
                          <td>6J</td>
                          <td>5</td>
                          <td>Occupied</td>
                         
                        </tr>
                        <tr>
                          <td>9D</td>
                          <td>17</td>
                          <td>Available</td>
                         
                        </tr>
                        <tr>
                          <td>2Y</td>
                          <td>11</td>
                          <td>Occupied</td>
                         
                        </tr>
                        <tr>
                          <td>3Q</td>
                          <td>17</td>
                          <td>Available</td>
                         
                        </tr>
                        <tr>
                          <td>9J</td>
                          <td>8</td>
                          <td>Occupied</td>
                         
                        </tr>
                        <tr>
                          <td>8A</td>
                          <td>3</td>
                          <td>Available</td>
                         
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
export default BedDetails;