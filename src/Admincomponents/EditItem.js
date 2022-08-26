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


const EditItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");
  const [img, setImg] = useState("")
  const navigate = useNavigate();
  let base64code = ""
//   const onChange = e => {
//       const file = e.target.files[0];

//       // this image will be sent to upload in the db.
//       setImg(file)
//       // this is just form image preview
//       const objectUrl = URL.createObjectURL(file)
//       setImageurl(objectUrl)
//   };

//   const convertToBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const fileReader = new FileReader();
//       fileReader.readAsDataURL(file);
//       fileReader.onload = () => {
//         resolve(fileReader.result);
//       };
//       fileReader.onerror = (error) => {
//         reject(error);
//       };
//     });
//   }

  const UpdateData =async ()  => {

    // const base64 = await convertToBase64(img);
    const payload={
      
      itemPrice: price,
      itemUnit: unit,
    }
    if ( price == "" || unit == "") {
      alert('All fields are mandatory!')
    } else {

      axios
      .post("http://192.168.43.93/FypApi/api/Fyp/UpdateItems",payload) 
      .then((res) => {
        console.log("this is the response: ", res);
        alert("Updated  successfully");
      })
      .then(() => navigate(-1))
      .catch((error) => alert("Item not Added"));
    };
  }
    
  return (
    <>
    <div className='header1'>
            <p> 
                EDIT ITEM
            </p>
        </div>
      <div className="newitem">
        <div className="newitemdiv">
        <Form>
          <Row form>
            <Col md={8}>
              <FormGroup>
                <Label>PRICE</Label>
                <Input
                  placeholder="Enter New Price"
                  bsSize="lg"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={8}>
              <FormGroup>
                <Label>Unit</Label>
                <Input
                  placeholder="Enter Item Unit"
                  bsSize="lg"
                  value={unit}
                  onChange={(event) => setUnit(event.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          {/* <Row form>
            <Col md={8}>
         <div>
        <img src={Imageurl} style={{width: '100px', height: '100px'}} />
        <br/><br/>
        <input type="file"  onChange={onChange} />
        <br/>
        </div> 
        </Col>
        </Row> */}

          <Button className="savebtn" color="primary" onClick={UpdateData}>
            Save
          </Button>
          
        </Form>
        </div>
      </div>
    </>
  );
};

export default EditItem;
