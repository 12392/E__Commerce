import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Components/User/Home";
import About from "./Components/User/About";
import Service from "./Components/User/Service";
import Contact from "./Components/User/Contact";
import Login from "./Components/User/Login";
import signUp from "./Components/User/SignUp";
import Admin from "./Components/Admin/Admin";
import AddProducts from "./Components/Admin/Addproducts";
import AdminService from "./Components/Admin/AdminService";
import deleteProducts from "./Components/Admin/deleteProducts";
import Cart from "./Components/User/Cart";
import Buy from "./Components/User/makePayment";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service/login" component={Login} />
        <Route exact path="/service/login/signup" component={signUp} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/add" component={AddProducts} />
        <Route exact path="/adminService" component={AdminService} />
        <Route exact path="/delete" component={deleteProducts} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/buy" component={Buy} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
