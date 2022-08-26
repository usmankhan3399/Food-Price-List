import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Row, Col, Label, Input, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

const Addcomplaint = () => {
  const [sname, setSname] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [Imageurl, setImageurl] = useState("");
  const [img, setImg] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();


 
  let base64code = ""
  const onChange = e => {
      const file = e.target.files[0];

      // this image will be sent to upload in the db.
      setImg(file)
      // this is just form image preview
      const objectUrl = URL.createObjectURL(file)
      setImageurl(objectUrl)
  };
 
  const onLoad = fileString => {
    console.log(fileString);
    this.base64code = fileString
  };
 
  const getBase64 = file => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  const submitData = async () => {

    setLoading(true)

    // const formData = new FormData();
    // formData.append("file", img)

    const base64 = await convertToBase64(img);


    const payload =  {
      userEmail: localStorage.getItem("email"),
      shopAddress: address,
      city: city,
      complaintType: type,
      complaintStatus : 1,
      complaintPicture: base64,
      shopName: sname,
    }

    console.log('this body will be sent: ', payload)


    axios
      .post("http://192.168.43.93/FypApi/api/Fyp/AddComplaint", payload)
      .then((res) => {
        console.log("this is the response: ", res);
        alert("Complaint added successfully ");
      })

      .then(() =>{
    setLoading(false)
        
         navigate("/Userdashboard")})
      .catch((error) => {
    setLoading(false)
        
        alert("Complaint  failed")});
  };

  return (
    <>
    <Header/>
    <div className='header'>
            <p> 
               ADD COMPLAINT
            </p>
        </div>
    <div bsSize="sm" className="regdiv">
      
      <Form className="regclass">
     
        <Row form>
          <Col md={10}>
            <FormGroup>
              <Label for="exampletName" sm={20}>
                Shop Name
              </Label>
              <Input
                bsSize="sm"
                className="mb-3"
                id="exampleName"
                name="shopName"
                placeholder="Enter Shop Name"
                value={sname}
                onChange={(event) => setSname(event.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Col md={10}>
          <FormGroup>
            <Label for="exampleSelect">Complaint Type</Label>
            <Input
              id="exampleSelect"
              name="select"
              type="select"
              placeholder="select complaint type"
              bsSize="sm"
              className="mb-3"
              onChange={(event) => setType(event.target.value)}
            >
              <option>Hygene</option>
              <option>Weight</option>
              <option>Over Price</option>
              <option>Hygene & Over Price</option>
              <option>Weight & Over Price</option>
              <option>Hygene & Weight</option>
            </Input>
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
              <option>Quetta</option>
            </Input>
          </FormGroup>
        </Col>
        <Col sm={10}>
          <FormGroup>
            <Label for="exampleAddress">Shop Address</Label>
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
        <div>
        <img src={Imageurl} style={{width: '200px', height: '200px'}} />
        <br/><br/>
        <input type="file"  onChange={onChange} />
        <br/>
        </div>

        <div className="btngroup">
          <Button disabled={loading} color="primary" onClick={submitData}>
            {loading  ? "LOADING..." : "Submit"}
          </Button>
          <Button
            classname="Cancelbtn"
            color="primary"
            onClick={() => navigate("/Complaint")}
          >
            {" "}
            Cancel{" "}
          </Button>
        </div>

        
      </Form>
    </div>
    </>
  );
  
};

export default Addcomplaint;
