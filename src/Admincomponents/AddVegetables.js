import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Col,
  Row,
  Label,
  Input,
  Button,
} from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddVegetables = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");
  const [city, setCity] = useState(localStorage.getItem("city"));
  const [category, setCategory] = useState(localStorage.getItem("category"));
  const [Imageurl, setImageurl] = useState("");
  const [img, setImg] = useState("")
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

  const submitData =async ()  => {

    const base64 = await convertToBase64(img);
    const payload={
      itemName: name,
      itemPrice: price,
      itemUnit: unit,
      itemCity: city,
      itemCategory:category,
      itemPicture:base64
    }
    if (name == "" || price == "" || unit == "") {
      alert('All fields are mandatory!')
    } else {

      axios
      .post("http://192.168.43.93/FypApi/api/Fyp/addItems",payload) 
      .then((res) => {
        console.log("this is the response: ", res);
        alert("Item  added successfully");
      })
      .then(() => navigate(-1))
      .catch((error) => alert("Item not Added"));
    };
  }
    
  return (
    <>
    <div className='header1'>
            <p> 
                ADD NEW VEGETABLE
            </p>
        </div>
      <div className="newitem">
        <div className="newitemdiv">
        <Form>
          <Row form>
          <Col md={10}>
          <FormGroup>
            <Label for="exampleSelect">Select Vegetable</Label>
            <Input
              id="exampleSelect"
              name="select"
              type="select"
              placeholder="select Vegetables"
              bsSize="sm"
              className="mb-3"
              onChange={(event) => setName(event.target.value)}
            >
              <option>Bean</option>
              <option>Brinjal</option>
              <option>Carrot</option>
              <option>Cabbage</option>
              <option>CauliFlower</option>
              <option>Corn</option>
              <option>Cucumber</option>
              <option>Garlic</option>
              <option>Lady's Finger</option>
              <option>Lemon</option> 
              <option>Mint</option>
              <option>Onion</option>
              <option>Potato</option>    
              <option>Peas</option>
              <option>Reddish</option>
              <option>Tomato</option>
              <option>Turnip</option>
            </Input>
          </FormGroup>
        </Col>
          </Row>
          <Row form>
            <Col md={8}>
              <FormGroup>
                <Label>PRICE</Label>
                <Input
                  placeholder="Enter Item Price"
                  bsSize="lg"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
          <Col md={10}>
          <FormGroup>
            <Label for="exampleSelect">Select Unit</Label>
            <Input
              id="exampleSelect"
              name="select"
              type="select"
              placeholder="select Unit"
              bsSize="sm"
              className="mb-3"
              onChange={(event) => setUnit(event.target.value)}
            >
              <option>Kg</option>
              <option>Litre</option>
              <option>Dozen</option>    
            </Input>
          </FormGroup>
        </Col>
          </Row>
          <Row form>
            <Col md={8}>
          <div>
        <img src={Imageurl} style={{width: '100px', height: '100px'}} />
        <br/><br/>
        <input type="file"  onChange={onChange} />
        <br/>
        </div>
        </Col>
        </Row>

          <Button className="savebtn" color="primary" onClick={submitData}>
            Save
          </Button>
          
        </Form>
        </div>
      </div>
    </>
  );
};

export default AddVegetables;
