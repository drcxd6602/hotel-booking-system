import {
  faBars,
  faDashboard,
  faHotel,
  faMessage,
  faPeopleGroup,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import "./adminSidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const AdminSidebar = ({ itemNo, setItemNo }) => {
  const links = [
    {
      name: "Dashboard",
      icon: faDashboard,
      no: 1,
    },
    {
      name: "Users",
      icon: faUser,
      no: 2,
    },
    {
      name: "Hotels",
      icon: faHotel,
      no: 3,
    },
    {
      name: "Teams",
      icon: faUserGroup,
      no: 4,
    },
    {
      name: "Messages",
      icon: faMessage,
      no: 5,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="adminSidebar"
      style={isOpen ? { width: "250px" } : { width: "55px" }}
    >
      <div className="adminSidebarContainer">
        <div className="asTitle">
          <span
            className="asTitleText"
            style={isOpen ? { display: "block" } : { display: "none" }}
          >
            Admin
          </span>
          <FontAwesomeIcon
            icon={faBars}
            className="asIcon"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div className="asMenu">
          {links.map((item, index) => (
            <div
              className={
                item.no === itemNo
                  ? "asMenuItem asMenuItemActive"
                  : "asMenuItem"
              }
              onClick={() => setItemNo(item.no)}
              style={isOpen ? {marginLeft : "10px"} :{marginLeft : "0px"}}
            >
              <FontAwesomeIcon icon={item.icon} className="asIcon" />
              <span
                className="asMenuItemName"
                style={isOpen ? { display: "block" } : { display: "none" }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
