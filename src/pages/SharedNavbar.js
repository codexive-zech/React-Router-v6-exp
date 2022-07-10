import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import StyledNavbar from "../component/StyledNavbar";

const SharedNavbar = () => {
  return (
    <section className="section">
      {/* <Navbar /> */}
      <StyledNavbar />
      <Outlet />
    </section>
  );
};

export default SharedNavbar;
