import React, { useEffect, useState } from "react";
import { Table, Button, Label } from "reactstrap";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const PendingComplaints = () => {
  const [tableData, setTableData] = useState([]);
  const [city, setCity] = useState(localStorage.getItem("city"));
  const [commpstatus, setCompStatus] = useState("");
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
      <div className="complaintstable">
        {/* <img src={complatintDAta.imga} />
      <p>{complatindata.name}</p> */}
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
                <td className="tdcls">
                  <Button color="primary" onClick={ action}>
                    {/* <VscEdit className="iconcls" /> */}
                    RESOLVE
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default PendingComplaints;
