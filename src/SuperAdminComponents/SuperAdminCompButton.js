import {
    Button,
    Label,
  } from "reactstrap";
  import React, {useState} from "react";
  import "bootstrap/dist/css/bootstrap.min.css";
  import Header from "../components/Header";
  import { NavLink, Link } from "react-router-dom";
//   import vgimage from "../images/vegetableimage.png";
//   import { useNavigate } from "react-router-dom";
  const SuperAdminCompButton = () => {
    
  
    // const [showButtons, setShowButtons] = useState(false)
  
    return (
      <>
        <Header />
        <div className="header">
          <p>COMPLAINTS STATUS</p>
        </div>
        <br/>
        <div className="categorydiv">
            <NavLink to="/SuperAdminPendingComplaints" style={{ textDecoration: "none", flex: 1 }}>
              <Button className="vegetablebtn" active block color="success">
                {/* <img className="img1" src={vgimage} /> */}
               PENDING COMPLAINTS
              </Button>
            </NavLink>
            <Link to="/SuperAdminResolvedComplaints" style={{ textDecoration: "none", flex: 1 }}>
              <Button className="fruitbtn" active block color="success">
                {/* <img className="img2" src={frtimage} /> */}
                RESOLVED COMPLAINTS
              </Button>
            </Link>
            <Link to="/HallOfFame" style={{ textDecoration: "none", flex: 1 }}>
              <Button className="fruitbtn" active block color="success">
                {/* <img className="img2" src={frtimage} /> */}
               HALL OF FAME
              </Button>
            </Link>
            <Link to="/HallOfShame" style={{ textDecoration: "none", flex: 1 }}>
              <Button className="fruitbtn" active block color="success">
                {/* <img className="img2" src={frtimage} /> */}
               HALL OF SHAME
              </Button>
            </Link>
          </div>        
      </>
    );
  };
  export default SuperAdminCompButton;
  