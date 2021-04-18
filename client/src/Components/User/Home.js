import React from "react";
import web from "../User/Images/img1.jpg";
import Navbar from "../NavBar/Nav";
import Common from "../NavBar/Common";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Common
        name="Do Shopping with us"
        imgsrc={web}
        visit="/Service/login"
        btnname="Ready to fill your cart"
      />
    </>
  );
};

export default Home;
