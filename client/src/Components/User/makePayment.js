import React, { useState } from "react";
import Navbar from "../NavBar/NavService";

const Buy = () => {
  return (
    <>
      <Navbar></Navbar>

      <div classname="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Name of Purchaser
              </label>
              <input
                type="text"
                className="form-control"
                id="Customer"
                placeholder=""
              />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                {" "}
                Address of Purchaser
              </label>
              <input
                type="text"
                className="form-control"
                id="Purchaser"
                placeholder=""
              />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                {" "}
                Card No
              </label>
              <input
                type="Password"
                className="form-control"
                id="Card"
                placeholder=""
              />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                {" "}
                CVV
              </label>
              <input
                type="Password"
                className="form-control"
                id="category"
                placeholder=""
              />
            </div>

            <div className="col-md-2 col-20 mx-auto">
              <button className="btn btn-outline-primary">
                {" "}
                Make payment{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buy;
