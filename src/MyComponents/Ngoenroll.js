import React from "react";
import Footer from './../MyPages/Footer';
import Header from './../MyComponents/Header';
import {Link} from "react-router-dom"

function Ngoenroll() {
  return (
    <div>
      <Header/>
      <a href="/login" class="btn btn-warning">
      <h1 class="text-black d-flex text-l justify-content-center">
        Create Profile
      </h1>
      </a>
      <div class="p-5 mx-auto d-flex flex-column align-items-center">
        <div class="card" style={{ width: "50rem" }}>
          <div class="card-body">
            <div class="my-3 mx-3">
              <div class="row g-0 text-center">
                <div class="col-sm-6 col-md-8 text-start ">
                  <h5 class="card-title">Profile</h5>
                  <div class="p-3">
                    <p class="card-text fw-light">ID: xyz</p>
                    <p class="card-text fw-light">Contact No - +91 ***** *****</p>
                    <p class="card-text fw-light">
                      Email - profile@gmail.com
                    </p>
                    <p class="card-text fw-light">
                      Address - 12, Road No 2, Teen Dongri, Yashwant Nagar,
                      Goregaon West, Mumbai, Maharashtra
                    </p>
                  </div>
                </div>
                <div class="col-6 col-md-4 text-black">
                  <Link
                    to="/"
                    className="btn btn-warning nav-link active"
                    style={{ width: "10rem" }}
                  >
                    Sign Out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Ngoenroll;
