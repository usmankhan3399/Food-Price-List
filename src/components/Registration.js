import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Row, Col, Label, Input, Button } from "reactstrap";
import { Link,useNavigate} from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();
  const submitData = () => {
    axios
      .post("http://192.168.43.93/FypApi/api/Fyp/addUserDetail", {
        userName: name,
        userCity: city,
        userEmail: email,
        userPassword: password,
        userRole: 1,
        userAdress: address,
        userContact: contact,
      })
      .then((res) => {
        console.log("this is the response: ", res);
        alert("User added successfully");
      })

      .then(() => navigate("/Login"))
      .catch((error) => alert("registration failed"));
  };

  // const submitData = async () => {
  //   try {

  //   } catch (error) {

  //   }
  //   const res = await axios.post(url, {})
  //   console.log(res)
  //   alert('success message')
  // }

  return (
    <>
    <div className='header1'>
            <p> 
                REGISTER YOURSELF
            </p>
        </div>
    <div bsSize="sm" className="regdiv">
      <Form className="regclass">
        <Row form>
          <Col md={10}>
            <FormGroup>
              <Label for="exampletName" sm={20}>
                Name
              </Label>
              <Input
                bsSize="sm"
                className="mb-3"
                id="exampleName"
                name="Name"
                placeholder="Enter Your Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={10}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Enter Email Address"
                type="email"
                bsSize="sm"
                className="mb-3"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={10}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password "
                type="password"
                bsSize="sm"
                className="mb-3"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={10}>
            <FormGroup>
              <Label for="examplecontactnumber">Contact No</Label>
              <Input
                id="examplecontactnumber"
                name="contactnumber"
                bsSize="sm"
                className="mb-3"
                placeholder="Enter Your Contact Number"
                value={contact}
                onChange={(event) => setContact(event.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={10}>
            <FormGroup>
              <Label for="exampleSelect">City</Label>
              <Input
                id="exampleSelect"
                name="select"
                type="select"
                placeholder="Select your City"
                bsSize="sm"
                className="mb-3"
                onChange={(event) => setCity(event.target.value)}
              >
                <option>Islamabad</option>
                <option>Rawalpindi</option>
                <option>Lahore</option>
                <option>Karachi</option>
                <option>Multan</option>
                <option>Pishawar</option>
                <option>Quetta</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Col sm={10}>
          <FormGroup>
            <Label for="exampleAddress">Address</Label>
            <Input
              id="exampleAddress"
              name="address"
              placeholder="1234 Main St"
              bsSize="sm"
              className="mb-3"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormGroup>
        </Col>

        <FormGroup check>
          <Input id="exampleCheck" name="check" type="checkbox" />
          <Label check for="exampleCheck">
            Accept terms & policy
          </Label>
        </FormGroup>
        {/* <Link to="/Login" style={{ textDecoration: "none" }}>
          <Button>Sign Up</Button>
        </Link> */}
       
          <div className="btngroup">
          <Button color="primary" onClick={submitData}>Sign up</Button>
        <Button classname ="Cancelbtn"   color="primary" onClick={() =>navigate("/")}> Cancel </Button>

          </div>
       
        
        
      </Form>
    </div>
    </>
  );
};
export default Registration;
