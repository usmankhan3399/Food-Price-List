
import React, { useEffect, useState } from "react";
import { Table, Button, 
    ButtonDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle, Label } from "reactstrap";
import Header from "../components/Header";
import axios from "axios";
const HallOfShame= () => {
    const [tableData, setTableData] = useState([]);
    const [dropdownOpen, setOpen] = React.useState(false);
    const [city, setCity] = useState(localStorage.getItem("city"));
    useEffect(() => {
        axios
          .get(
            `http://192.168.43.93/FypApi/api/Fyp/HallOfShame?city=${city}`
          )
          .then((res) => {
            setTableData(res.data);
            console.log("response====================: ", res.data);
            
          })
          .catch((err) => console.log("got error: ", err));
      }, [city]);
  return (
    <>
      <Header />
      <div>
        <div className="header">
          <p>HALL OF SHAME</p>
        </div>
        <div className="tabletopdiv">
        <ButtonDropdown
          toggle={() => {
            setOpen(!dropdownOpen);
          }}
          isOpen={dropdownOpen}
        >
          <DropdownToggle className="bg-primary" caret>
            {city}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => setCity("Islamabad")}>
              Islamabad
            </DropdownItem>
            <DropdownItem onClick={() => setCity("Rawalpindi")}>
              Rawalpindi
            </DropdownItem>
            <DropdownItem onClick={() => setCity("Lahore")}>
              Lahore
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
        <div className="compdiv">
        </div>
        <div>
          <Table borderless>
            <thead>
              <tr>
                <th>#</th>

                <th>Shop Name</th>
                <th>Number Of Complaints</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((comp, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{comp.shopName}</td>
                  <td>{comp.Counter}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default HallOfShame;
