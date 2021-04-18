import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { addToCart } from "../../actions/cartAction";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div class="card">
          <img
            src={props.imgsrc}
            class="card-img-top"
            alt="..."
            width="500"
            height="300"
          />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <h3 class="card-title">Rs {props.price}</h3>
            <p class="card-text">{props.description}</p>
            <NavLink to="/buy">
              <button className="btn btn-primary ml-5 ">Buy</button>
            </NavLink>
            <button
              className="btn btn-primary ml-3"
              onClick={() => props.addToCart(props.id, 1)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { addToCart })(Card);
