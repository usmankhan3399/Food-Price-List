import { Button, Label } from "reactstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import { NavLink, Link } from "react-router-dom";
import vgimage from "../images/vegetableimage.png";
import frtimage from "../images/fruitsimage.png";
import livestockimage from "../images/livestockimage.png";
import commoditiesimage from "../images/commodities.png";
import complaintimage from "../images/complaintimage.png";
const SuperAdminDashboard = () => {
  return (
    <>
      <Header />
      <Label className="categorylabel">
        WELCOME  SUPER ADMIN
      </Label>
      <div className="categorydiv">
        <NavLink to="/Vegetable" style={{ textDecoration: "none" }}>
          <Button className="vegetablebtn" active block color="success">
            <img className="img1" src={vgimage} />
            VEGETABLES
          </Button>
        </NavLink>
        <Link to="/Fruits" style={{ textDecoration: "none" }}>
          <Button className="fruitbtn" active block color="success">
            <img className="img2" src={frtimage} />
            FRUITS
          </Button>
        </Link>
        <Link to="/Livestock" style={{ textDecoration: "none" }}>
          <Button className="Livestockbtn" active block color="success">
            <img className="img3" src={livestockimage} />
            LIVESTOCK
          </Button>
        </Link>
        <Link to="/Commodities" style={{ textDecoration: "none" }}>
          <Button className="Livestockbtn" active block color="success">
            <img className="img4" src={commoditiesimage} />
            ESSENTIAL COMMODITIES
          </Button>
        </Link>
        <Link to="/SuperAdminCompButton" style={{ textDecoration: "none" }}>
          <Button className="Livestockbtn" active block color="success">
            <img className="img5" src={complaintimage} />
            COMPLAINT
          </Button>
        </Link>
      </div>
    </>
  );
};
export default SuperAdminDashboard;
