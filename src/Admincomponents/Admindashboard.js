import { Button, Label } from "reactstrap";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import { NavLink, Link } from "react-router-dom";
import vgimage from "../images/vegetableimage.png";
import frtimage from "../images/fruitsimage.png";
import livestockimage from "../images/livestockimage.png";
import commoditiesimage from "../images/commodities.png";
import complaintimage from "../images/complaintimage.png";
import axios from 'axios'

import { useNavigate } from "react-router-dom";
const Admindashboard = () => {
  const navigate = useNavigate();
  const [complaintsLength, setComplaintsLength] = useState(null)

  const [showButtons, setShowButtons] = useState(false);
  React.useEffect(() => {
    axios
    .get(
      `http://192.168.43.93/FypApi/api/Fyp/AdminPendingComplaintList?city=${localStorage.getItem("city")}`
    )
    .then((res) => {
      // setTableData(res.data);
      console.log("response====================: ", res.data);
      setComplaintsLength(res.data.length)
      // setComplatinData(res.data)
    })
    .catch((err) => console.log("got error: ", err));
   }, []);
  return (
    <>
      <Header />
      <Label className="categorylabel">
        WELCOME ! Mr <Label>{localStorage.getItem("name")}</Label>
      </Label>


      <div className="categorydiv">
        <NavLink
          to="/Adminvegetable"
          style={{ textDecoration: "none", flex: 1 }}
        >
          <Button className="vegetablebtn" active block color="success">
            <img className="img1" src={vgimage} />
            VEGETABLES
          </Button>
        </NavLink>

        <Link to="/Adminfruit" style={{ textDecoration: "none", flex: 1 }}>
          <Button className="fruitbtn" active block color="success">
            <img className="img2" src={frtimage} />
            FRUITS
          </Button>
        </Link>

        <Link to="/Adminlivestock" style={{ textDecoration: "none", flex: 1 }}>
          <Button className="Livestockbtn" active block color="success">
            <img className="img3" src={livestockimage} />
            LIVESTOCK
          </Button>
        </Link>
        <Link to="/AdminCommodities" style={{ textDecoration: "none" }}>
          <Button className="Livestockbtn" active block color="success">
            <img className="img4" src={commoditiesimage} />
            ESSENTIAL COMMODITIES
          </Button>
        </Link>

        <Button
          style={{
            backgroundColor: "#555",
            color: "white",
            textDecoration: "none",
            position: "relative",
            display: "flex",
            borderRadius: "2px",
            justifyContent: 'center',
            alignItems: "center"
          }}
          className="Livestockbtn"
          active
          block
          color="success"
          onClick={() => navigate("/ComplaintButton")}
        >
           {complaintsLength && 
           
          <div
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
              // paddingTop: "5px",
              // paddingBottom: "5px",
              // paddingRight: "10px",
              // paddingLeft: "10px",
              // margin: '5px',
              borderRadius: "50%",
              background: "red",
               color: "white",
              width: "25px",
              height: "25px",
            }}
          >{complaintsLength}</div>
          }
          <img className="img5" src={complaintimage} />
          VIEW COMPLAINTS
        </Button>

        {/* <div style={{display: showButtons ? 'block': 'none'}}>
    <Button onClick={()=>navigate("/PendingComplaints")}>Pending Complaints</Button>
    <Button  onClick={()=>navigate("/ResolvedComplaints")}>Rsolved Complaints</Button>
  </div> */}
      </div>
    </>
  );
};
export default Admindashboard;
