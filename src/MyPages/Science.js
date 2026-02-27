import React from "react";
import ScienceCatalogue from "../MyComponents/ScienceCatalogue";
import Footer from './Footer';
import Header from '../MyComponents/Header';
import bg from './../images/scienceimg.gif'

function Science() {
  return (
    <div>
      <Header/>
      <div>
        <img src={bg} alt="bg" width={"100%"} height="400" class="acc1"></img>
        <div class="position-relative"></div>
        <div class="position-absolute top-50 start-50 translate-middle">
          <p class="text-warning display-3 fw-semibold">
          </p>
          <p class="text-white fs-3 fw-light my-1">
          </p>
          
        </div>
      </div>
      <ScienceCatalogue />
      <Footer/>
    </div>
  );
}

export default Science;
