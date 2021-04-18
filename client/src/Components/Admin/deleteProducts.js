import React from "react";
import Navbar from "../NavBar/NavAdmin";

const deleteProducts = () => {
  return (
    <>
      <Navbar></Navbar>

      <div classname="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Name of product
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="name of product"
              />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                {" "}
                Image
              </label>
              <input
                type="text"
                className="form-control"
                id="image"
                placeholder="Image"
              />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                {" "}
                Brand
              </label>
              <input
                type="text"
                className="form-control"
                id="brand"
                placeholder="Brand"
              />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                {" "}
                Category
              </label>
              <input
                type="text"
                className="form-control"
                id="category"
                placeholder="category"
              />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                {" "}
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="description"
              />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                {" "}
                Price
              </label>
              <input
                type="text"
                className="form-control"
                id="price"
                placeholder="price"
              />
            </div>

            <div className="col-md-2 col-20 mx-auto">
              <button className="btn btn-outline-primary"> Delete </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default deleteProducts;
