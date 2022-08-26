import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Button, Table, Label } from "reactstrap";
import { VscAdd } from "react-icons/vsc";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function UserPendingComplaints() {
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();
  const [showButtons, setShowButtons] = useState(false)
  useEffect(() => {
    axios
    .get(
      `http://192.168.43.93/FypApi/api/Fyp/PendingComplainByNameList?name=${localStorage.getItem(
        "name"
      )} `
    )
      .then((res) => {
        setTableData(res.data);
        console.log("response====================: ", res);
      })
      .catch((err) => console.log("got error: ", err));
  }, []);
  return (
    <>
      <Header />
      <div>
        <div className="header">
          <p>PENDING COMPLAINTS</p>
        </div>
        <div className="compdiv">
          <div>
          <Button
            color="primary"
            size="lg"
            className="icon_add"
            onClick={() => setShowButtons(!showButtons)}
            // onClick={() => navigate("/Addcomplaints")}
          >
            <VscAdd className="iconcls" />
            New Complaint
          </Button>
          <div className="showbtns" style={{display: showButtons ? 'block': 'none'}}>
    <Button color="dark"  onClick={()=>navigate("/Addcomplaints")} >SHOW IDENTITY</Button>
    <Button color="success"  onClick={()=>navigate("/Anonymoscomplaints")} >HIDE IDENTITY</Button>
    </div>
   
  </div>
          <div className="xx">
            <Label className="lbl"> City : </Label>
            <Label>{localStorage.getItem("city")}</Label>
          </div>
        </div>
        <div>
          <Table Table className="vegtable" borderless>
            <thead>
              <tr>
                <th>#</th>
              <th>Complaint Id</th>
              <th>Shop Name</th>
              <th>Shop Address</th>
              <th>Complaint Type</th>
              <th>image</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((comp, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{comp.complaintId}</td>
                  <td>{comp.shopName}</td>
                  <td>{comp.shopAddress}</td>
                  <td>{comp.complaintType}</td>
                  <td><img src={comp.complaintPicture} style={{height: '80px', width: '80px'}} alt='base64Img' />
</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default UserPendingComplaints;
