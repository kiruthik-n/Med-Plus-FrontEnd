import React from "react";
import PatientSideBar from "../Dashboard/PatientSideBar";
import "./Hospital.css"

import Carousel from "./Carousel";
function Hospital(){
    return(
<div className="container">
<PatientSideBar/>
<div className="grcontainer">
  
<Carousel/>

</div>


</div>


    )
};
export default Hospital;