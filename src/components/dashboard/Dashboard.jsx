import "./dashboard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faBars,
  faBook,
  faCalendar,
  faCalendarCheck,
  faDashboard,
  faDeleteLeft,
  faDollar,
  faDollarSign,
  faEarth,
  faEdit,
  faHotel,
  faMessage,
  faPeopleGroup,
  faPerson,
  faTicket,
  faTrash,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const topList = [
    {
      icon: faUser,
      color: "#7e26d0 ",
      bgColor: "#d4c3e3",
      count: 3657,
      text: "Users",
    },
    {
      icon: faCalendarCheck,
      color: "#3C91E6",
      bgColor: "#CFE8FF",
      count: 1210,
      text: "New Bookings",
    },
    {
      icon: faEarth,
      color: "#FFCE26",
      bgColor: "#FFF2C6",
      count: 2834,
      text: "Visitors",
    },
    {
      icon: faDollarSign,
      color: "#FD7238",
      bgColor: "#FFE0D3",
      count: 3380,
      text: "Total Sales",
    },
  ];

  const statusCol = ["#DB504A", "#FFCE26", "#3C91E6"];

  const adpRBData = [
    {
      username: "drcXd6602",
      email: "2020bit029@sggs.ac.in",
      date: "10/06/2023",
      hotel: "Classmates",
      status: {
        col: 0,
        text: "Yet to check In",
      },
    },
    {
      username: "drcXd6602",
      email: "2020bit029@sggs.ac.in",
      date: "10/06/2023",
      hotel: "Classmates",
      status: {
        col: 1,
        text: "Checked In",
      },
    },
    {
      username: "drcXd6602",
      email: "2020bit029@sggs.ac.in",
      date: "10/06/2023",
      hotel: "Classmates",
      status: {
        col: 0,
        text: "Yet to check In",
      },
    },
    {
      username: "drcXd6602",
      email: "2020bit029@sggs.ac.in",
      date: "10/06/2023",
      hotel: "Classmates",
      status: {
        col: 2,
        text: "Checked out",
      },
    },
    {
      username: "drcXd6602",
      email: "2020bit029@sggs.ac.in",
      date: "10/06/2023",
      hotel: "Classmates",
      status: {
        col: 2,
        text: "Checked out",
      },
    },
    {
      username: "drcXd6602",
      email: "2020bit029@sggs.ac.in",
      date: "10/06/2023",
      hotel: "Classmates",
      status: {
        col: 1,
        text: "Checked In",
      },
    },
  ];

  const adpTodos = [
    { status: 0, text: "Meeting at 7:10 pm" },
    { status: 2, text: "Delivering all the reports to the CEO" },
    { status: 0, text: "Meeting at 7:10 pm" },
    { status: 0, text: "Delivering all the reports to the CEO" },
    { status: 2, text: "Meeting at 7:10 pm" },
    { status: 2, text: "Delivering all the reports to the CEO" },
    { status: 0, text: "Meeting at 7:10 pm" },
    { status: 2, text: "Delivering all the reports to the CEO" },
  ];

  return (
    <div className="apd">
      <div className="apdContainer">
        <div className="apdTitle">
          <span className="apdText">Dashboard</span>
        </div>

        <div className="apdHeader">
          <span className="apdPath">
            {" "}
            <span className="apdPathOne">Dashboard</span>
            <span className="apdPathTwo">{">"}</span>
            <span className="apdPathThree">Home</span>
          </span>
          <span className="apdDownload">Download</span>
        </div>

        <div className="apdToplist">
          {topList.map((item, index) => (
            <div className="apdListItem" key={index}>
              <div className="apdListItemContainer">
                <div
                  className="apdListItemIconContainer"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="apdListItemIcon"
                    style={{
                      color: item.color,
                    }}
                  />
                </div>
                <div className="apdListItemInfo">
                  <span className="apdListItemInfoCount">{item.count}</span>
                  <span className="apdListItemInfoName">{item.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="adpBottomSection">
          <div className="adpRecentBookings">
            <span className="adpRecentBookingsTitle">Recent Bookings</span>
            <div className="adpRecentBookingsLabels">
              <span className="adpUserNameLabel">UserName</span>
              <span className="adpUserEmailLabel">Email</span>
              <span className="adpBookingDateLabel">Booking Date</span>
              <span className="adpHotelLabel">Hotel</span>
              <span className="adpBookingStatusLabel">Status</span>
            </div>
            {adpRBData.map((item, index) => (
              <div className="adpRecentBookingsContainer" key={index}>
                <span className="adpUserName">{item.username}</span>
                <span className="adpUserEmail">{item.email}</span>
                <span className="adpBookingDate">{item.date}</span>
                <span className="adpHotel">{item.hotel}</span>
                <span
                  className="adpBookingStatus"
                  style={{ backgroundColor: statusCol[item.status.col] }}
                >
                  {" "}
                  {item.status.text}
                </span>
              </div>
            ))}
          </div>
          <div className="adpTodos">
            <div className="apdTodosTop">
              <span className="adpTodoTitle">Todo List</span>
              <span className="adpTodoAdd">
                <FontAwesomeIcon icon={faAdd} />
              </span>
            </div>
            <div className="adpTodoMain">
              {adpTodos.map((item, index) => (
                <div className="adpTodoItem" key={index}>
                  <div
                    className="adpTodoItemBefore"
                    style={{ backgroundColor: statusCol[item.status] }}
                  ></div>
                  <span className="adpTodoItemText">{item.text}</span>
                  <div className="adpTodoItemIcons">
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="adpTodoItemIcon"
                      style={{ color: "blue" }}
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="adpTodoItemIcon"
                      style={{ color: "red" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
