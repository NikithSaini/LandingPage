import React from "react";
import "./Navbar.css";
import Logo from "./logo.js";
import Appbar from "./Appbar";
import LastItem from "./lastItem";
const NavBar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <Appbar />
      <LastItem />
    </nav>
  );
};

export default NavBar;
