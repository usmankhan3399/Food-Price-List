import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Row, Col, Label, Input, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import onestar from "../images/onestar.png";

const ActionScreen = () => {
  
  const [cmpid, setCmpid] = useState("");
  const [Actiontype, setActiontype] = useState("");
  const [Imageurl, setImageurl] = useState("");
  const [img, setImg] = useState("")
  const [star, setStar] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

const submitstar = () => {
  localStorage.setItem("star","*" );
}
const submitstar2 = () => {
  localStorage.setItem("star","**" );
}
const submitstar3 = () => {
  localStorage.setItem("star","***" );
}
const submitstar4 = () => {
  localStorage.setItem("star","****" );
}
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
      actionComplaintId:cmpid,
      actionTaken:Actiontype,
      actionImage: base64,
      rating:localStorage.getItem("star")
      
    }

    console.log('this body will be sent: ', payload)


    axios
      .post("http://192.168.43.93/FypApi/api/Fyp/addAdminAction", payload)
      .then((res) => {
        console.log("this is the response: ", res);
        alert("Action Taken  ");
      })

      .then(() =>{
    setLoading(false)
        
         navigate("/Admindashboard")})
      .catch((error) => {
    setLoading(false)
        
        alert("Complaint  failed")});
  };

  return (
    <>
    <Header/>
    <div className='header'>
            <p> 
                COMPLAINT ACTION
            </p>
        </div>
    <div bsSize="sm" className="actionscreen">
      
      <Form className="regclass">
        <Row form>
          <Col md={10}>
            <FormGroup>
              <Label for="exampletName" sm={20}>
                Complaint ID
              </Label>
              <Input
                bsSize="sm"
                className="mb-3"
                id="exampleName"
                name="shopName"
                placeholder="Enter Complaint ID"
                value={cmpid}
                onChange={(event) => setCmpid(event.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Col md={10}>
          <FormGroup>
            <Label for="exampleSelect">Action Taken</Label>
            <Input
              id="exampleSelect"
              name="select"
              type="select"
              placeholder="select complaint type"
              bsSize="sm"
              className="mb-3"
              onChange={(event) => setActiontype(event.target.value)}
            >
              <option>Warning</option>
              <option>Fine</option>
              <option>Sealed</option>
              <option>Punishment</option>
              <option>Warning & fine</option>
              <option>FIne & Sealed</option>
              <option>Fine & Punishment</option>
              <option>Sealed & Punishment</option>
              <option>Fine &Sealed & Punishment</option>
            </Input>
          </FormGroup>
        </Col>
        <div>
        <img src={Imageurl} style={{width: '200px', height: '200px'}} />
        <br/><br/>
        <input type="file"  onChange={onChange} />
        <br/>
        </div>
<div>
<Button className="strbtn" color="secondry" onClick={submitstar}>
            <img className="star1" src={onestar} />
           
          </Button>
          <Button className="strbtn" color="secondry" onClick={submitstar2}>
            <img className="star1" src={onestar} />
           
          </Button>
          <Button className="strbtn" color="secondry" onClick={submitstar3} >
            <img className="star1" src={onestar} />
           
          </Button>
          <Button className="strbtn" color="secondry" onClick={submitstar4} >
            <img className="star1" src={onestar} />
           
          </Button>
</div>

        <div className="btngroup">
          <Button disabled={loading} color="primary" onClick={submitData}>
            {loading  ? "LOADING..." : "Submit"}
          </Button>
          <Button
            classname="Cancelbtn"
            color="primary"
            onClick={() => navigate("/ComplaintButton")}
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

export default ActionScreen;
