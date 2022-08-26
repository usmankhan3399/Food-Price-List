import React, { useEffect, useState } from "react";
import { Table, Button, Label, ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, } from "reactstrap";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SuperAdminPendingComplaints = () => {
  const [tableData, setTableData] = useState([]);
  const [city, setCity] = useState(localStorage.getItem("city"));
  const [dropdownOpen, setOpen] = React.useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        `http://192.168.43.93/FypApi/api/Fyp/AdminPendingComplaintList?city=${city}`
      )
      .then((res) => {
        setTableData(res.data);
        console.log("response====================: ", res.data);
        // setComplatinData(res.data)
      })
      .catch((err) => console.log("got error: ", err));
  }, [city]);
 const action=()=>{
  navigate("/ActionScreen")
 }
 

  
  return (
    <>
      <Header />
      <div className="header">
          <p>PENDING COMPLAINTS</p>
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
      <div className="complaintstable">
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Complaint Id</th>
              <th>Shop Name</th>
              <th>Shop Address</th>
              <th>Complaint Type</th>
              <th>City</th>
              <th>image</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((c, index) => (
              <tr>
                <th scope="row">{index + 1}</th>

                <td>{c.complaintId}</td>
                <td>{c.shopName}</td>
                <td>{c.shopAddress}</td>
                <td>{c.complaintType}</td>
                <td>{c.city}</td>
                <td>
                  <img
                    src={c.complaintPicture}
                    style={{ height: "80px", width: "80px" }}
                    alt="base64Img"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default SuperAdminPendingComplaints;
