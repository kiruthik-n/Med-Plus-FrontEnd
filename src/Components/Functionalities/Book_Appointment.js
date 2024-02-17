import Sidebar from "../../Components/Dashboard/PatientSideBar";
import './Book_Appointment.css'
import doctor from "../../img/doctoravatar.png";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";

function BookAppointment(){
  return (
    <>
      <div className="container">
        <Sidebar/>
        <div className="AfterSideBar">
          <div className="Main_Add_Doctor_div">
            <h1>Book Appointment</h1>
            <form>
              <div>
                <label>Patient Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="patName"
                
                    required
                  />
                </div>
              </div>
              <div>
                <label>Age</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Age"
                    name="age"
                 
                    required
                  />
                </div>
              </div>
              <div>
                <label>Mobile Number</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Mobile Number"
                    name="mobile"
                  
                    required
                  />
                </div>
              </div>
              <div>
                <label>Email</label>
                <div className="inputdiv">
                  <input
                    type="email"
                    placeholder="Enter email"
                    name="email"
                 
                    required
                  />
                </div>
              </div>
              <div>
                <label>Gender</label>
                <div className="inputdiv">
                  <select
                    name="gender"
                    
                    required
                  >
                    <option value="Choose Gender">Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Select Department</label>
                <div className="inputdiv">
                  <select
                    name="department"
                 
                    required
                  >
                    <option value="General" id="departmentt" onChange={()=>{var dep=document.getElementById("departmentt").value}} >Select</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Neurology">Dietician</option>
                    <option value="Neurology">Pediatrics</option>
                    <option value="ENT">ENT</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Psychiatrist">Psychiatrist</option>
                  </select>
                </div>
              
              </div>
              <div>
                <label>Select Date</label>
                <div className="inputdiv">
                  <input
                    type="date"
                    placeholder="dd-mm-yy"
                    name="Date"
                    min={minDate}
                    required
                  />
                </div>
              </div>
             
              <div>
                <label>Time</label>
                <div className="inputdiv">
                  <input
                    type="time"
                    placeholder="Schedule Time"
                    name="time"
                    min="17:00"
                    max="21:00"
                   
                    required
                  />
                </div>
              </div>
             
             
              <button type="submit" className="formsubmitbuttonn">
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
    
  );
 
};

export default BookAppointment;
var date=new Date();
var tdate=date.getDate();
var month=date.getMonth() + 1;
if(month< 10 ){
  month= '0'+month;
}
if(tdate< 10 ){
  tdate= '0'+tdate;
}
var year=date.getUTCFullYear();

var minDate= year + "-" + month +"-" + tdate;
