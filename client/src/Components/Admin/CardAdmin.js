import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deleteProduct } from "../../actions/productAction";

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
            <p class="card-text">{props.description}</p>
            <button
              className="btn btn-primary ml-7"
              onClick={() => props.deleteProduct(props.id)}
            >
              Delete product
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { deleteProduct })(Card);

