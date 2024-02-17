import {React,useEffect,useState }from "react";
import Sidebar from "../Dashboard/AdminSideBar";
import "./Appointment.css"
import axios from "axios";
function Patients(){

  const [patient,setPatient]=useState([])

  useEffect(() => {

    axios.get('http://localhost:3001/Patients')
    .then(result => setPatient(result.data))
    .catch(err => console.log(err))

  }, [])


    return(
  <>
        <div className="container">
          <Sidebar />
          <div className="AfterSideBar">
            <div className="Payment_Page">
              <h1 style={{ marginBottom: "2rem" , textAlign:"center" }}>Patient Details</h1>
              <div className="patientBox">
                <table >
                  <thead>
                    <tr>
                      <th>Patient Name</th>
                      
                      <th>Mobile</th>
                      <th>Mail</th>                      
                      <th>Remove?</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                       {

                      patient.map((nurse) =>{

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
export default Patients;