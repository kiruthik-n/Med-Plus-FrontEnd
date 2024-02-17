import {React,useEffect,useState} from "react";
import { Table } from "antd";
import Sidebar from "../Dashboard/AdminSideBar";
import "./Appointment.css"
import axios from "axios";
function AmbulanceDetails(){

  const [ambulance,setAmbulance]=useState([])

  useEffect(() => {

    axios.get('http://localhost:3001/Ambulance')
    .then(result => setAmbulance(result.data))
    .catch(err => console.log(err))

  }, [])




    return(
  <>
        <div className="container">
          <Sidebar />
          <div className="AfterSideBar">
            <div className="Payment_Page">
              <h1 style={{ marginBottom: "2rem" , textAlign:"center" }}>Ambulance Details</h1>
              <div className="patientBox">
                <table >
                  <thead>
                    <tr>
                      <th>Vehicle Number</th>
                      <th>Ambulance Type</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                      {

                      ambulance.map((ambulance) =>{

                        return <tr>

                          <td>{ambulance.number}</td>
                          <td>{ambulance.type}</td>
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
export default AmbulanceDetails;