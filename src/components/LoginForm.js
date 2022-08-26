import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState( "");
  const [password, setPassword] = useState("");
  const login = () => {
    axios
      .get(
        `http://192.168.43.93/FypApi/api/Fyp/UserLogin?userEmail=${email}&userPassword=${password}`
      )
      .then((res) => {
        localStorage.setItem("name", res.data.userName);
        localStorage.setItem("city", res.data.userCity);
        localStorage.setItem("email",res.data.userEmail);
     
        console.log("this is the response of login: ", res.data);
        if (res.data.userRole === 1) {
          navigate("/UserDashboard");
        }
        if (res.data.userRole === 2) {
          navigate("/Admindashboard");
        }
        if (res.data.userRole === 0) {
          navigate("/SuperAdmindashboard");
        }
      })
      .catch((err) => console.log("got error in login api: ", err));

    // https://www.robinwieruch.de/react-router-private-routes/#:~:text=Private%20Routes%20in%20React%20Router,page%2C%20they%20cannot%20access%20it.

    // .then(() => navigate("/Login"))
    // .catch((error) => alert("registration failed"));
  };
  return (
    <>
    <div className="bg_img_login">
    <div className='header1'>
            <p> 
                LOGIN/SIGNUP
            </p>
        </div>
    <div className="loginform">
      {/* <Label className='loginlbl'>
      LOGIN/SIGNUP
      </Label> */}
      <Form inline className="loginclass">
        <Row form>
          <Col md={7}>
            <FormGroup floating>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
                bsSize="sm"
                className="loginfield"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Label for="exampleEmail">Email</Label>
            </FormGroup>
          </Col>
        </Row>{" "}
        <Row form>
          <Col md={7}>
            <FormGroup floating>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
                bsSize="sm"
                className="loginfield"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <Label for="examplePassword">Password</Label>
            </FormGroup>
          </Col>
        </Row>
        <Button className="loginbtn" color="primary" onClick={login}>
          Login
        </Button>
        <br />
        <br />
        <Label className="signuplabel">
          Dont have account{" "}
          <Link to="/Registration" style={{ textDecoration: "none" }}>
            {" "}
            Signup
          </Link>
        </Label>
      </Form>
      </div>
      </div>
    </>
  );
};
export default LoginForm;
