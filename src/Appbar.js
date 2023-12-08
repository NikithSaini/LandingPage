import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Appbar.css";

const Appbar = () => {
  return (
    <div className="list">
      <h5 className="hd1">Home</h5>
      <h5 className="hd2">Attorneys</h5>
      <h5 className="hd3">Practice areas</h5>
      <h5 className="hd4">About Us</h5>
    </div>
  );
};
export default Appbar;
