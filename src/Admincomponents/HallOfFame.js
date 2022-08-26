
import React, { useEffect, useState } from "react";
import { Table, Button, Label } from "reactstrap";
import Header from "../components/Header";
import axios from "axios";
const HallOfFame= () => {
    const [tableData, setTableData] = useState([]);
    const [city, setCity] = useState(localStorage.getItem("city"));
    useEffect(() => {
        axios
          .get(
            `http://192.168.43.93/FypApi/api/Fyp/HallOfFame`
          )
          .then((res) => {
            setTableData(res.data);
            console.log("response====================: ", res.data);
            
          })
          .catch((err) => console.log("got error: ", err));
      }, []);
  return (
    <>
      <Header />
      <div>
        <div className="header">
          <p>HALL OF FAME</p>
        </div>
        <div className="compdiv">
          <div className="xx">
            <Label className="lbl"> City : </Label>
            <Label>{localStorage.getItem("city")}</Label>
          </div>
        </div>
        <div>
          <Table borderless>
            <thead>
              <tr>
                <th>#</th>

                <th>User Name</th>
                <th>Number Of Complaints</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((comp, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{comp.userName}</td>
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

export default HallOfFame;
