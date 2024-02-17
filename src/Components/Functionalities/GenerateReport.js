import React from "react";
import "./GenerateReport.css"
import Sidebar from "../Dashboard/DoctorSideBar";

function CreateReport(){
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Main_Add_Doctor_div">
            <h1>PRESCRIPTION</h1>
            <form>
             
              <div>
                <label>Patient Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Patient Name"
                    name="patientName"
             
                  />
                </div>
              </div>
              <div>
                <label>Patient Age</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Age"
                    name="patientAge"
           
                  />
                </div>
              </div>
              <div>
                <label>Patient Mobile</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Patient Mobile"
                    name="patientMobile"
                   
                  />
                </div>
              </div>
              <div>
                <label>Patient Email</label>
                <div className="inputdiv">
                  <input
                    type="email"
                    placeholder="abc@gmail.com"
                    name="email"
                   
                  />
                </div>
              </div>
              <div>
                <label>Patient Gender</label>
                <div className="inputdiv">
                  <select
                    name="patientGender"
                   
                  >
                    <option value="Choose Gender">Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Patient Blood Group</label>
                <div className="inputdiv">
                  <select
                    name="patientBloodGroup"
                   
                  >
                    <option value="Choose Blood Group">Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Patient Disease</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Disease"
                    name="patientDisease"
                 
                  />
                </div>
              </div>
              <div>
                <label>Patient Temperature</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="99^C"
                    name="patientTemperature"
                  
                  />
                </div>
              </div>

              <div>
                <label>Patient Weight</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="75 KG"
                    name="patientWeight"
                 
                  />
                </div>
              </div>
              <div>
                <label>Patient BP</label>
                <div className="inputdiv adressdiv">
                  <input
                    type="number"
                    placeholder="140/90 mmHg"
                    name="patientBP"
                  
                  />
                </div>
              </div>
            
             
              {/* ******************************************** */}
              <div>
                <label>Medicines</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="MEDICINE"
                    name="medName"
                  
                  />
                  <select name="duration" >
                    <option value="Dosage">Duration</option>
                    <option value="1 day">1 Day</option>
                    <option value="2 days">2 Days</option>
                    <option value="3 days">3 Days</option>
                    <option value="4 days">4 Days</option>
                  </select>
                  <select name="frequency" >
                    <option value="Dosage">Frequency</option>
                    <option value="1">1 time/day</option>
                    <option value="2">2 times/day</option>
                    <option value="3">3 times/day</option>
                  </select>
                  <input type="submit" value={"Add"}  style={{cursor:"pointer"}} />
                </div>
              </div>
              {/* *********************************** */}
              <div>
                <label>Appointment Date</label>
                <div className="inputdiv">
                  <input
                    type="date"
                    placeholder="dd-mm-yyyy"
                    name="date"
                 
                  />
                </div>
              </div>
              <div>
                <label>Time</label>
                <div className="inputdiv">
                  <input
                    type="time"
                    name="time"
                  
                  />
                </div>
              </div>
              <div>
                <label>Admit Patient ?</label>
                <div className="inputdiv">
                <input type="checkbox" id="myCheck"  onClick={

()=>{var admitt=document.getElementById("myCheck");
var text1=document.getElementById("text1");
var text2=document.getElementById("text2");
if(admitt.checked==true){
  text1.style.display = "block";
  text2.style.display = "block";
}else{
  text1.style.display = "none";
  text2.style.display = "none";
}

}
                }/> Click Here
                <input type="text" id="text1" placeholder="Room Number" style={{display:"none"}}/>
                <input type="text" id="text2" placeholder="Bed Number" style={{display:"none"}}/>
                </div>
              </div>

              <button
                className="formsubmitbutton bookingbutton"
                
              >
                Generate Report
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateReport;
