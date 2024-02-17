import React from "react";
import "./Prescription.css"
import seal from "../../img/seal2.png"
import PatientSideBar from "../Dashboard/PatientSideBar";
function Prescription(){
    return(
        <div className="container">
        <PatientSideBar/>
        <div className="AfterSideBar">
       <div className="seperate">
       <header>
        <h1>Medical Prescription</h1>
    </header>

    <section>
    <h4 className="datee">Date:09-01-2024</h4>
        <div class="prescription">
            <h2>Patient Information</h2>
            <br/>
            <div class="patient-info">
                <p><strong>Name:</strong> Kiruthik Kumar</p>
                <p><strong>Temperature:</strong> 99 Degree Celcius</p>
                <p><strong>Age:</strong> 20</p>
                <p><strong>Blood Pressure:</strong> 119/90 mmHg</p>
                <p><strong>Mobile:</strong> 789654325</p>
                <p><strong>Weight:</strong> 62Kg</p>
            
            </div>

            <h2>Prescription Details</h2>
            <table className="pres">
                <tr>
                    <th>Medication</th>
                    <th>Dosage</th>
                    <th>Frequency</th>
                </tr>
                <tr>
                    <td>Paracetomol</td>
                    <td>125mg</td>
                    <td>Once a day</td>
                </tr>
                <tr>
                    <td>Dart</td>
                    <td>20mg</td>
                    <td>Once a day</td>
                </tr>
                <tr>
                    <td>Dolopar </td>
                    <td>650mg</td>
                    <td>Twice a day</td>
                </tr>
              
            </table>
        </div>
        <div class="doctor-info">
                <p><strong>Doctor:</strong> Dr. Hari Krishna</p>
                <p><strong>Mobile:</strong> +91 9876543215</p>
                
            </div>
            <div class="seal">
            <img src={seal} alt="Digital Seal"/>
            </div>
            <br/>
            <br/>
            <br/>
    </section>
        
    </div>
    <br/>
    <br/>
       <div className="seperate">
       <header>
        <h1>Medical Prescription</h1>
    </header>

    <section>
    <h4 className="datee">Date:22-11-2023</h4>
        <div class="prescription">
            <h2>Patient Information</h2>
           <br/>
            <div class="patient-info">
                <p><strong>Name:</strong> John Samuel</p>
                <p><strong>Temperature:</strong> 98.7 Degree Celcius</p>
                <p><strong>Age:</strong> 36</p>
                <p><strong>Blood Pressure:</strong> 112/87 mmHg</p>
                <p><strong>Mobile:</strong> 985464325</p>
                <p><strong>Weight:</strong> 75Kg</p>
            
            </div>

            <h2>Prescription Details</h2>
            <table className="pres">
                <tr>
                    <th>Medication</th>
                    <th>Dosage</th>
                    <th>Frequency</th>
                </tr>
                <tr>
                    <td>Ketaconazole</td>
                    <td>18mg</td>
                    <td>Once a day</td>
                </tr>
                <tr>
                    <td>Oxycodone</td>
                    <td>10mg</td>
                    <td>Twice a day</td>
                </tr>
                <tr>
                    <td>Propanolol</td>
                    <td>25mg</td>
                    <td>Once a day</td>
                </tr>
                <tr>
                    <td>Citrezine</td>
                    <td>17mg</td>
                    <td>Twice a day</td>
                </tr>
                <tr>
                    <td>Vitamin c </td>
                    <td>10mg</td>
                    <td>Twice a day</td>
                </tr>
              
            </table>
        </div>
        <div class="doctor-info">
                <p><strong>Doctor:</strong> Dr.Hari Krishnan</p>
                <p><strong>Mobile:</strong> +91 9876543215</p>
                
            </div>
            <div class="seal">
            <img src={seal} alt="Digital Seal"/>
            </div>
            <br/>
            <br/>
            <br/>
    </section>
        
    </div>

        
        </div>
        </div>


    )
}
export default Prescription;