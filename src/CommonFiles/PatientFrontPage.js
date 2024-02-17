import React from "react";
import "./CommonCSS.css";
import { Slide } from "react-slideshow-image";
import backk from "../img/hospital.gif"
import Carousel from "../Components/Functionalities/Carousel";
import PatientSideBar from "../Components/Dashboard/PatientSideBar";

function FrontPage(){
  return (
    <div className="container">
    <PatientSideBar/>
      <div className="AfterSideBar">

        <div className="gif">
        <Carousel/>

        </div>
       
      </div>
    </div>
  );
};

export default FrontPage;
