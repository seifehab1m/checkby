import React from "react";
import logo from "../assets/images/logo.png";

const Navbar: React.FC = () => {
  return (
    <section className="bg-primary-bg navbar">
      <div className="pt-8 pb-4 ">
        <img src={logo} alt="logo" className="h-8" />
      </div>
    </section>
  );
};

export default Navbar;
