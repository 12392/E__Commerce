import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Navbar from "../NavBar/Nav";

const SignUp = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = data;

  const onChnage = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/users", data)

      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res);
        history.push("/service/login");
        alert("Please login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const history = useHistory();

  return (
    <>
      <Navbar></Navbar>
      <div className="my-5"></div>

      <h1 className="text-center">
        {" "}
        Feeling Excited that you are joining as a Customer
      </h1>
      <div classname="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={onChnage}
                placeholder="Enter your First Name"
              />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                {" "}
                Set Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={onChnage}
                placeholder="name@example.com"
              />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                {" "}
                Set Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={onChnage}
                placeholder="Its secret"
              />
            </div>

            <div className="col-md-2 col-20 mx-auto">
              <button
                className="btn btn-outline-primary center"
                onClick={onSubmit}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
