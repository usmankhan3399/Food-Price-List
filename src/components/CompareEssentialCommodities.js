import React, { useEffect, useState } from "react";
import {
  Table,
  Input,
  Col,
  Row,
  FormGroup,
  Form,
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Label,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import axios from "axios";
import { useLongPress } from 'use-long-press';
import { useNavigate} from "react-router-dom";

const CompareEssentialCommodities = () => {
  const [tableData, setTableData] = useState([]);
  const [itemName, setItemName] = useState("");
  const [dropdownOpen, setOpen] = React.useState(false);
  const [city, setCity] = useState(localStorage.getItem("city"));
  const navigate = useNavigate();
  const bind = useLongPress(() => {
console.log('Long pressed!');
   navigate("/Addcomplaints")
  });
  useEffect(() => {
    axios
      .get(
        `http://192.168.43.93/FypApi/api/Fyp/CompareEssentialCommoditiesList?vegetablename=${itemName}`
      )
      .then((res) => {
        setTableData(res.data);
        console.log("response====================: ", res);
      })
      .catch((err) => console.log("got error: ", err));
  }, [itemName]);
  return (
    <>
      <Header />
      <div className="tabletopdiv">
      {/* <Form>
      <Row form>
          <Col md={10}>
          <FormGroup>
         <Label for="exampleSelect">Select Item</Label>
         <Input
           id="exampleSelect"
           name="select"
           type="select"
           placeholder="select EssentialCommodities"
           bsSize="sm"
           className="mb-3"
           onChange={(event) => setItemName(event.target.value)}
         >
           <option>rice</option>
           <option>Daal channa</option>
           <option>LUX</option>
                
         </Input> */}
      
        <ButtonDropdown
          toggle={() => {
            setOpen(!dropdownOpen);
          }}
          isOpen={dropdownOpen}
        >
          <DropdownToggle className="bg-primary" caret>
            {itemName}
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem onClick={() => setItemName('dal channa')}>dal channa</DropdownItem>
                    {/* <DropdownItem onClick={() => setItemNamety('Rawalpindi')}>Rawalpindi</DropdownItem>
                    <DropdownItem onClick={() => setItemName('Lahore')}>Lahore</DropdownItem>
                    <DropdownItem onClick={() => setItemName('Karachi')}>Karachi</DropdownItem>
                    <DropdownItem onClick={() => setItemName('Multan')}>Multan</DropdownItem>
                    <DropdownItem onClick={() => setItemName('Quetta')}>Quetta</DropdownItem>
                    <DropdownItem onClick={() => setItemName('Peshawar')}>Peshawar</DropdownItem> */}
          </DropdownMenu>
        </ButtonDropdown>
         {/* </FormGroup>
        </Col>
          </Row>
          </Form> */}
      </div>

      <div className='header'>
            <p> 
                ESSENTIAL COMMODITIES
            </p>
        </div>
      <div>
        <Table className="Livestocktable" bordered size="" striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Essential Commodities</th>
              <th>Price</th>
              <th>Unit</th>
              <th>City</th>
            
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr >
                <th scope="row">{index + 1}</th>
                <td>{item.itemName}</td>
                <td>{item.itemPrice}</td>
                <td>{item.itemUnit}</td>
                <td>{item.itemCity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default CompareEssentialCommodities;
