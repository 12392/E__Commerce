import React from "react";
import NavService from "../NavBar/NavService";

import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cartAction";

import { NavLink } from "react-router-dom";

function Cart(props, { addToCart, removeFromCart }) {
  return (
    <>
      <NavService></NavService>
      <h1 className="text-center">Welcome to Cart </h1>

      <div className="ccontainer-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row ">
              {props.cart.cartItems.map((val) => (
                <div className="col-md-4 col-10 mx-auto">
                  <div className="card" key={val._id}>
                    <img
                      src={val.image}
                      className="card-img-top"
                      alt="..."
                      width="500"
                      height="300"
                    />

                    <div className="card-body">
                      <h5 className="card-title">{val.name}</h5>
                      <h4 className="card-title">{val.price}</h4>
                      <p className="card-text">{val.description}</p>
                      <div className="form-group">
                        <label>qty</label>
                        <select
                          className="form-control"
                          value={val.qty}
                          onChange={(event) =>
                            props.addToCart(val._id, event.target.value)
                          }
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                        </select>
                      </div>

                      <button
                        className="btn btn-primary ml-3"
                        onClick={() => props.removeFromCart(val._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-center">
          {" "}
          Total Price :
          {props.cart.cartItems
            .reduce((acc, product) => acc + product.qty * product.price, 0)
            .toFixed(2)}
        </h3>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <NavLink to="/buy">
            <button className=" center btn btn-outline-primary">Buy</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  cartItems: state.cartItems,
});

export default connect(mapStateToProps, { removeFromCart, addToCart })(Cart);
