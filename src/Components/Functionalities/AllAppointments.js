import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Dashboard/PatientSideBar";
import "./AllAppointment.css"
function AllAppointment(){
    return(
  <>
        <div className="container">
          <Sidebar />
          <div className="AfterSideBar">
            <div className="Payment_Page">
              <h1 style={{ marginBottom: "2rem" , textAlign:"center" }}> Appointments</h1>
              <div className="patien">
              <Link to={"/bookappointment"}>
              <button>Book New Appointment</button>
              </Link>

                <table >
                  <thead>
                    <tr>
                     
                      <th>Doctor</th>
                      <th>Department</th>
                      <th>Date</th>
                      <th>Report</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                     
                        <tr>
                      
                          <td>HariKrishnan</td>
                          <td>Cardiology</td>
                          <td>12-12-12</td>
                          <td>Report</td>
                        </tr>
                        <tr>
                       
                          <td>HariKrishnan</td>
                          <td>Cardiology</td>
                          <td>12-12-12</td>
                          <td>Report</td>
                        </tr>
                        <tr>
                    
                          <td>HariKrishnan</td>
                          <td>Cardiology</td>
                          <td>12-12-12</td>
                          <td>Report</td>
                        </tr>
                        <tr>
                        
                          <td>HariKrishnan</td>
                          <td>Cardiology</td>
                          <td>19-09-22</td>
                          <td>Report</td>
                        </tr>
                        <tr>
                       
                          <td>HariKrishnan</td>
                          <td>Cardiology</td>
                          <td>12-01-24</td>
                          <td>Report</td>
                        </tr>
                        <tr>
                        
                          <td>HariKrishnan</td>
                          <td>Cardiology</td>
                          <td>28-02-23</td>
                          <td>Report</td>
                        </tr>
                        <tr>
                        
                          <td>HariKrishnan</td>
                          <td>Cardiology</td>
                          <td>11-11-12</td>
                          <td>Report</td>
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
export default AllAppointment;