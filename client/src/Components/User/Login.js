import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import Navbar from "../NavBar/Nav";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;
  const history = useHistory();

  const onChnage = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/users/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res);

        if (res.data.isAdmin === false) {
          console.log(res);
          history.push("/service");
          alert("Login granted");
        }
        if (res.data.isAdmin === true) {
          alert("hello admin");
          console.log("I am res", res);
          console.log("is adimn", data);
          history.push("/admin");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("user not found");
      });
  };

  return (
    <>
      <Navbar> </Navbar>
      <div className="my-5"></div>
      <h1 className="text-center"> Please Login to Explore Items</h1>

      <div classname="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                {" "}
                Email address
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
                Password
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
              <button className="btn btn-outline-primary" onClick={onSubmit}>
                Sign in
              </button>
            </div>

            <NavLink to="/service/login/signup">
              {" "}
              <h4 className="text-center mt-3">
                {" "}
                Not have an account then click here to start amazing journey of
                shopping{" "}
              </h4>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
