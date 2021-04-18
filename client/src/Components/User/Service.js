import React, { useState, useEffect } from "react";
import Card from "./Card1";
import NavService from "../NavBar/NavService";
import { getProducts } from "../../actions/productAction";
import { connect } from "react-redux";

const Service = (props) => {
  useEffect(() => {
    props.getProducts();
  }, []);

  const [searchInput, setSearchInput] = useState("");

  const searchInputHandler = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <NavService />
      <div classname="my -5">
        <h1 className="text-center">Welcome to our store</h1>
        <div classname="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <div className="mb-5">
                <label
                  for="exampleFormControlInput1"
                  className="form-label"
                ></label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Explore products"
                  value={searchInput}
                  onChange={searchInputHandler}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ccontainer-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row ">
              {props.prod.products
                .filter((product) => {
                  if (searchInput === "") {
                    return product;
                  } else if (
                    product.name
                      .toLowerCase()
                      .includes(searchInput.toLowerCase())
                  ) {
                    return product;
                  }
                })
                .map((val) => {
                  return (
                    <Card
                      id={val._id}
                      data={val}
                      imgsrc={val.image}
                      title={val.name}
                      description={val.description}
                      price={val.price}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  prod: state.product,
});

export default connect(mapStateToProps, { getProducts })(Service);
