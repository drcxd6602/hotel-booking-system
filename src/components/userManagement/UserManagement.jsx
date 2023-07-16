import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./userManagement.scss";
import { faAdd, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";

const UserManagement = () => {
  const userData = [
    {
      username: "drcXd6602",
      email: "2020bit029@sggs.ac.in",
      noOfBookings: 5,
    },
    {
      username: "drcXd6602",
      email: "2020bit029@sggs.ac.in",
      noOfBookings: 5,
    },
    {
      username: "drcXd6602",
      email: "2020bit029@sggs.ac.in",
      noOfBookings: 5,
    },
    {
      username: "drcXd6602",
      email: "2020bit029@sggs.ac.in",
      noOfBookings: 5,
    },
    {
      username: "drcXd6602",
      email: "2020bit029@sggs.ac.in",
      noOfBookings: 5,
    },
    {
      username: "drcXd6602",
      email: "2020bit029@sggs.ac.in",
      noOfBookings: 5,
    },
    {
      username: "drcXd6602",
      email: "2020bit029@sggs.ac.in",
      noOfBookings: 5,
    },
  ];

  return (
    <div className="apu">
      <div className="apuContainer">
        <div className="apuTitle">
          <span className="apuText">Users List</span>
        </div>

        <div className="apuHeader">
          <span className="apuPath">
            {" "}
            <span className="apuPathOne">Dashboard</span>
            <span className="apuPathTwo">{">"}</span>
            <span className="apuPathThree">Home</span>
          </span>
        </div>

        <div className="apuTabel">
          <div className="apuTabelContainer">
            <div className="apuTabelSearch">
              <input type="text" className="apuInputText" />
              <span className="apuInputIconText">
                Search
                <FontAwesomeIcon icon={faSearch} className="apuInputIcon" />
              </span>
              <span className="apuAddUser">
                Add
                <FontAwesomeIcon icon={faAdd} className="apuInputIcon" />
              </span>
            </div>
            <div className="apuTabelLabels">
              <span className="apuUsernameLabel">Username</span>
              <span className="apuEmailLabel">Email</span>
              <span className="apuNoOfBookingsLabel">No. of bookings</span>
              <span className="apuRecentOrdersLabel">Recent Orders</span>
              <span className="apuDeleteUserLabel">Delete User</span>
            </div>
            {userData.map((item, index) => (
              <div className="apuTabelContent">
                <span className="apuUsername">{item.username}</span>
                <span className="apuEmail">{item.email}</span>
                <span className="apuNoOfBookings">{item.noOfBookings}</span>
                <span className="apuRecentOrders">view</span>
                <span className="apuDeleteUser">
                  <FontAwesomeIcon icon={faTrash} color="red" />
                </span>
              </div>
            ))}
          </div>

          <div className="apuSendNotification">Hello</div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
