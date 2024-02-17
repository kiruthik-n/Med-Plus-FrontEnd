import React, { useState } from "react";
import { Radio } from "antd";
import admin from "./MEDC+ (1).png";
import "./DSignUp.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function DSignUp(){
const navigate = useNavigate();

const [name, setName]=useState()
const [dob, setDob]=useState()
const [mobile, setMobile]=useState()
const [email, setEmail]=useState()
const [password, setPassword]=useState()

const Submit = (e) =>{

  e.preventDefault();
  axios.post("http://localhost:3001/createPatient", {name,dob,mobile,email,password})
  .then(result => console.log(result))
  .catch(err => console.log(err))
  navigate("/");
}


  return (
    <>
      <div className="mainLoginPagee">
        
        <div className="rightsidee">
          <h1>Registration!!</h1>
           
            <form onSubmit={Submit}>
              <h3>Name</h3>
              <input
                type="text"
                name="ID"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <h3>D.O.B</h3>
              <input
                type="date"
                name="ID"
                onChange={(e) => setDob(e.target.value)}
                required
              />
              <h3>Mobile Number</h3>
              <input
                type="number"
                name="ID"
                onChange={(e) => setMobile(e.target.value)}
                required
              />
              <h3>Email</h3>
              <input
                type="text"
                name="ID"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <h3>Create Password</h3>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">REGISTER</button><br/><br/>
              
              <Link to={"/"} className="signlink"><h4>Already have an account? Click Here</h4></Link>
              

            </form>
          </div>
          

        </div>
     
      
    </>
  );
};

export default DSignUp;




































// import React, { useState } from "react";
// import axios from "axios";
// import "./DSignUp.css";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// function DSignUp(){
//   const navigate = useNavigate();


  // const [name, setName]=useState()
  // const [age, setAge]=useState()
  // const [mobile, setMobile]=useState()
  // const [email, setEmail]=useState()
  // const [password, setPassword]=useState()

  // const Submit = (e) =>{

  //   e.preventDefault();
  //   axios.post("http://localhost:3001/createPatient", {name,age,mobile,email,password})
  //   .then(result => console.log(result))
  //   .catch(err => console.log(err))
  //   navigate("/");
  // }


//   return (
//     <div className="signbody">
//       <div className="mainLoginPagee">
        
//         <div className="rightsidee">
//           <h1>Registration!!</h1>
       
//           <div>
         
//             <form onSubmit={Submit}>
              
//             {/* <div class="profile-pic">
//   <label class="-label" for="file">
//     <span class="glyphicon glyphicon-camera"></span>
//     <span>Upload Image</span>
//   </label>
//   <input id="file" type="file" />
//   <img src="https://static.thenounproject.com/png/1095860-200.png" id="output" width="200" />
// </div> */}

//               <h3>Name</h3>
//               <input
//                 type="text"
//                 name="ID"
//                 placeholder="Enter Full Name"
//                 required
//                 onChange={(e) => setName(e.target.value)}
//               />
             
//               <h3>Age</h3>
//               <input
//                 type="number"
//                 name="ID"
//                 placeholder="Enter Age"
//                 required
//                 onChange={(e) => setAge(e.target.value)}
//               /> 
              
//               <h3>Mobile</h3>
//               <input
//                 type="number"
//                 name="ID"
//                 placeholder="Enter Mobile Number"
//                 required
//                 onChange={(e) => setMobile(e.target.value)}
//               />
//               <h3>E-mail</h3>
//               <input
//                 type="text"
//                 name="ID"
//                 placeholder="Enter Email"
//                 required
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             <h3>Create Password</h3>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Set Password"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button type="submit">Register</button><br/>
              

//             </form>
//           </div>
          

//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default DSignUp;

