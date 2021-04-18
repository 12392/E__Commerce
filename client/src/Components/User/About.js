import React from "react";
import web from "../User/Images/img1.jpg";
import Navbar from "../NavBar/Nav";
import Common from "../NavBar/Common";

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btnname="Contact Now"
      />
    </>
  );
};

export default About;
