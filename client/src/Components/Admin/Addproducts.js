import React, { useState } from "react";
import Navbar from "../NavBar/NavAdmin";
import { addProduct } from "../../actions/productAction";
import { connect } from "react-redux";

const AddProducts = ({ addProduct }) => {
  const [data, setData] = useState({
    name: "",
    image: "",
    brand: "",
    category: "",
    description: "",
    price: "",
  });

  const { name, image, brand, category, description, price } = data;

  const onChnage = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addProduct(data);
  };

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
                value={name}
                onChange={onChnage}
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
                value={image}
                onChange={onChnage}
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
                value={brand}
                onChange={onChnage}
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
                value={category}
                onChange={onChnage}
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
                value={description}
                onChange={onChnage}
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
                value={price}
                onChange={onChnage}
                placeholder="price"
              />
            </div>

            <div className="col-md-2 col-20 mx-auto">
              <button className="btn btn-outline-primary" onClick={onSubmit}>
                {" "}
                Add{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { addProduct })(AddProducts);
