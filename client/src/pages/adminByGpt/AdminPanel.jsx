
import AdminSidebar from "../../components/adminSidebar/AdminSidebar"
import "./adminPanel.scss"
import UserManagement from "../../components/userManagement/UserManagement";
import HotelManagement from "../../components/hotelManagement/HotelManagement";
import { useState } from "react";
import Dashboard from "../../components/dashboard/Dashboard";

const AdminPanel = () => {

  const [itemNo, setItemNo] = useState(3);

  const comps = [ <Dashboard/>, <UserManagement />, <HotelManagement/>, <>teams</> , <>Messages</>];


  return (
    <div className="admin">
      <AdminSidebar itemNo = {itemNo}  setItemNo = {setItemNo} />
      <div className="adminContainer">

        <div className="adminContent">
          {comps[itemNo-1]}
        </div>
        
      </div>
    </div>
  );
}

export default AdminPanel
