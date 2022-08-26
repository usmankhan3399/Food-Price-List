import React, { useEffect, useState } from "react";
import {
  Table,
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Label,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import { useLongPress } from 'use-long-press';
import { useNavigate} from "react-router-dom";
import axios from "axios";
const Fruits = () => {
  const [tableData, setTableData] = useState([]);
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
        `http://192.168.43.93/FypApi/api/Fyp/GetFruitList?cityname=${city}`
      )
      .then((res) => {
        setTableData(res.data);
        console.log("response====================: ", res);
      })
      .catch((err) => console.log("got error: ", err));
  }, [city]);
  return (
    <>
      <Header />
      <div className="tabletopdiv" >
            <ButtonDropdown toggle={() => { setOpen(!dropdownOpen) }}
                isOpen={dropdownOpen}>
                <DropdownToggle  className="bg-primary" caret>
                    {city}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => setCity('Islamabad')}>Islamabad</DropdownItem>
                    <DropdownItem onClick={() => setCity('Rawalpindi')}>Rawalpindi</DropdownItem>
                    <DropdownItem onClick={() => setCity('Lahore')}>Lahore</DropdownItem>
                    <DropdownItem onClick={() => setCity('Karachi')}>Karachi</DropdownItem>
                    <DropdownItem onClick={() => setCity('Multan')}>Multan</DropdownItem>
                    <DropdownItem onClick={() => setCity('Quetta')}>Quetta</DropdownItem>
                    <DropdownItem onClick={() => setCity('Peshawar')}>Peshawar</DropdownItem> 
                </DropdownMenu>
            </ButtonDropdown>
        </div >
        <div className='header'>
            <p> 
                FRUITS
            </p>
        </div>
      <div>
        <Table className="fruitstable" bordered size="" striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Fruits</th>
              <th>Price</th>
              <th>Unit</th>
              <th>City</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}  {...bind()}>
                <th scope="row">{index + 1}</th>
                <td>{item.itemName}</td>
                <td>{item.itemPrice}</td>
                <td>{item.itemUnit}</td>
                <td>{item.itemCity}</td>
                <td><img src={item.itemPicture} style={{height: '80px', width: '80px'}} alt='base64Img' />
</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Fruits;
