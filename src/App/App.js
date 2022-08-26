import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import AddLivestock from "../Admincomponents/AddLiveStock";
import AddVegetables from "../Admincomponents/AddVegetables";
import AddFruits from "../Admincomponents/AddFruits";
import AddEssentialCommodities from "../Admincomponents/AddEssentialCommodities";
import CompareEssentialCommodities from "../components/CompareEssentialCommodities";
import LoginForm from "../components/LoginForm";
import Registration from "../components/Registration";
import Userdashboard from "../components/Userdashboard";
import Vegetable from "../components/Vegetable";
import Fruits from "../components/Fruits";
import  Addcomplaints from "../components/Addcomplaints";
import Commodities from "../components/Commodities";
import Livestock from "../components/Livestock";
import Admindashboard from "../Admincomponents/Admindashboard";
import Adminfruit from "../Admincomponents/Adminfruit";
import Adminlivestock from "../Admincomponents/Adminlivestock";
import Adminvegetable from "../Admincomponents/Adminvegetable";
import AdminCommodities from "../Admincomponents/AdminCommodities";
import PendingComplaints from "../Admincomponents/PendingComplaints";
import ResolvedComplaints from "../Admincomponents/ResolvedComplaints";
import UserPendingComplaints from "../components/UserPendingComplaints";
import Anonymoscomplaints from "../components/Anonymoscomplaints";
 import ComplaintButton from "../Admincomponents/ComplaintButton";
import HallOfFame from "../Admincomponents/HallOfFame";
import HallOfShame from "../components/HallOfShame";
import EditItem from "../Admincomponents/EditItem";
import ActionScreen from "../Admincomponents/ActionScreen";
import UserComplaintButton from "../components/UserComplaintButton";
import UserResolvedComplaints from "../components/UserResolvedComplaints";
import SuperAdminDashboard from "../SuperAdminComponents/SuperAdminDashboard"
import SuperAdminCompButton from "../SuperAdminComponents/SuperAdminCompButton"
import SuperAdminPendingComplaints from "../SuperAdminComponents/SuperAdminPendingComplaints"
import SuperAdminResolvedComplaints from "../SuperAdminComponents/SuperAdminResolvedComplaints";

const App = () => {
  return (
    <div>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/header" element={<Header />} />
          <Route path="/UserDashboard" element={<Userdashboard />} />
          <Route path="/AddEssentialCommodities" element={<AddEssentialCommodities />} />
          <Route path="/CompareEssentialCommodities" element={<CompareEssentialCommodities />} />
          <Route path="/AddFruits" element={<AddFruits />} />
          <Route path="/AddVegetables" element={<AddVegetables />} />
          <Route path="/AddLivestock" element={<AddLivestock />} />
          <Route path="/vegetable" element={<Vegetable />} />
          <Route path="/Commodities" element={<Commodities />} />
          <Route path="/Addcomplaints" element={<Addcomplaints />} />
          <Route path="/Livestock" element={<Livestock />} />
          <Route path="/Fruits" element={<Fruits />} />
          <Route path="/Adminfruit" element={<Adminfruit />} /> 
          <Route path="/Adminlivestock" element={<Adminlivestock />} />
          <Route path="/Adminvegetable" element={<Adminvegetable />} />
          <Route path="/Admindashboard" element={<Admindashboard />} />
          <Route path="/AdminCommodities" element={<AdminCommodities />} />
          <Route path="/UserPendingComplaints" element={<UserPendingComplaints />} />
          <Route path="/Anonymoscomplaints" element={<Anonymoscomplaints />} />
          <Route path="/PendingComplaints" element={<PendingComplaints />} />
          <Route path="/ResolvedComplaints" element={<ResolvedComplaints />} />
          <Route path="/ComplaintButton" element={<ComplaintButton />} />
          <Route path="/HallOfFame" element={<HallOfFame />} />
          <Route path="/HallOfShame" element={<HallOfShame/>} />
          <Route path="/EditItem" element={<EditItem/>}/>
          <Route path="/ActionScreen"element={<ActionScreen/>}/>
          <Route path="/UserComplaintButton"element={<UserComplaintButton/>}/>
          <Route path="/UserResolvedComplaints"element={<UserResolvedComplaints/>}/>
          <Route path="/SuperAdminDashboard"element={<SuperAdminDashboard/>}/>
          <Route path="/SuperAdminCompButton"element={<SuperAdminCompButton/>}/>
          <Route path="/SuperAdminPendingComplaints"element={<SuperAdminPendingComplaints/>}/>
          <Route path="/SuperAdminResolvedComplaints"element={<SuperAdminResolvedComplaints/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
