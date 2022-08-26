import React, { useEffect, useState } from "react";
import { Table, Label, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import { VscTrash, VscEdit, VscAdd } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Adminvegetable = () => {
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    data();
   }, []);
   const Additem = () => {
     localStorage.setItem("category", "Vegetables");
     navigate("/AddVegetables");
   };
   const data=()=>{
     axios
     .get(
       `http://192.168.43.93/FypApi/api/Fyp/GetVegetableList?cityname=${localStorage.getItem(
         "city"
       )}`
     )
     .then((res) => {
       setTableData(res.data);
       console.log("response====================: ", res);
     })
     .catch((err) => console.log("got error: ", err));
   }
   const editData = () => {
     navigate("/EditItem")
     };
      const deleteData = (id) => {
        alert(id)
      axios.delete(`http://192.168.43.93/FypApi/api/Fyp/DeleteItem/${id}`)
        
        .then(()=>{
         data();
         alert("Deleted successfully");
       })
       };
  return (
    <>
      <Header />
      <div className="plusbuttondiv">
        <Button color="warning" size="lg" className="iconadd" onClick={Additem}>
          <VscAdd className="iconcls" />
          Add
        </Button>
        <Label className="citynamelabel">
          City :
          <label className="citynameget">{localStorage.getItem("city")}</label>
        </Label>
      </div>
      <h1 className="h1">VEGETABLES</h1>

      <div>
        <Table className="vegtable" bordered size="" striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Id</th>
              <th>Vegetables</th>
              <th>Price</th>
              <th>Unit</th>
              <th>City</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.itemId}</td>
                <td>{item.itemName}</td>
                <td>{item.itemPrice}</td>
                <td>{item.itemUnit}</td>
                <td>{item.itemCity}</td>
                <td><img src={item.itemPicture} style={{height: '80px', width: '80px'}} alt='base64Img' />
</td>
                <td className="tdcls">
                  <Button color="primary" onClick={editData}>
                    <VscEdit className="iconcls" />
                    Edit
                  </Button>
                  <Button color="danger" className="iconbtn" onClick={() => deleteData(item.itemId)}>
                    <VscTrash className="iconcls" />
                    Delete
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
export default Adminvegetable;
