import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminFrontPage from "./CommonFiles/AdminFrontPage";
import DLogin from "./Components/Login/Login/DLogin";
import DoctorFrontPage from "./CommonFiles/DoctorFrontPage"
import PatientFrontPage from "./CommonFiles/PatientFrontPage"
import Add from "./Components/Functionalities/Add_Doctors"
import BookAppointment from "./Components/Functionalities/Book_Appointment";
import Appointment from "./Components/Functionalities/Appointment";
import AdminAppointment from "./Components/Functionalities/AdminAppointments";
import CreateReport from "./Components/Functionalities/GenerateReport";
import DocProfile from "./Components/Functionalities/DoctorProfile";
import PatientProfile from "./Components/Functionalities/PatientProfile";
import Add_Patient from "./Components/Functionalities/Add_Patient";
import AddAdmin from "./Components/Functionalities/Add_Admin";
import Hospital from "./Components/Functionalities/Hospital";
import Beds from "./Components/Functionalities/Beds";
import Nurse from "./Components/Functionalities/Add_Nurse";
import Doctors from "./Components/Functionalities/Doctors";
import Example from "./Components/Functionalities/Slide";
import Patients from "./Components/Functionalities/Patients";
import Nurses from "./Components/Functionalities/Nurses";
import Admin from "./Components/Functionalities/Admin";
import AddAmbulance from "./Components/Functionalities/Add_Ambulance";
import BedDetails from "./Components/Functionalities/BedDetails";
import AmbulanceDetails from "./Components/Functionalities/AmbulanceDetails";
import Prescription from "./Components/Functionalities/Prescription";
import AllAppointment from "./Components/Functionalities/AllAppointments";
import DSignUp from "./Components/Login/Login/DSignUp";
function App() {
  return (
    <>
<Routes>
  <Route path="/" element={<DLogin/>}/>
  <Route path="/Admindashboard" element={<AdminFrontPage/>}/>
  <Route path="/Doctordashboard" element={<DoctorFrontPage/>}/>
  <Route path="/Patientdashboard" element={<PatientFrontPage/>}/>
  <Route path="/adddoctor" element={<Add/>}/>
  <Route path="/bookappointment" element={<BookAppointment/>}/>
  <Route path="/viewappointment" element={<Appointment/>}/>
  <Route path="/adminappointment" element={<AdminAppointment/>}/>
  <Route path="/createreport" element={<CreateReport/>}/>
  <Route path="/doctorprofile" element={<DocProfile/>}/>
  <Route path="/patientprofile" element={<PatientProfile/>}/>
  <Route path="/addpatient" element={<Add_Patient/>}/>
  <Route path="/addadmin" element={<AddAdmin/>}/>
  <Route path="/hospital" element={<Hospital/>}/>
  <Route path="/beds" element={<Beds/>}/>
  <Route path="/addnurse" element={<Nurse/>}/>
  <Route path="/doctors" element={<Doctors/>}/>
  <Route path="/slide" element={<Example/>}/>
  <Route path="/nurses" element={<Nurses/>}/>
  <Route path="/patients" element={<Patients/>}/>
  <Route path="/admin" element={<Admin/>}/>
  <Route path="/ambulance" element={<AddAmbulance/>}/>
  <Route path="/beddetails" element={<BedDetails/>}/>
  <Route path="/ambulancedetails" element={<AmbulanceDetails/>}/>
  <Route path="/prescription" element={<Prescription/>}/>
  <Route path="/allappointment" element={<AllAppointment/>}/>
  <Route path="/signupp" element={<DSignUp/>}/>
</Routes>
    </>
  );
}

export default App;
