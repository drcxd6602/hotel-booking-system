import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = ({ type, setShowModal, showModal }) => {
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const Navigate = useNavigate();
  console.log(user);

  const handelNavLogin = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="navbar">
      <div className="container">
        <Link
          to={"/"}
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <span className="logo">GD Bookings</span>
        </Link>
        {user ? (
          <div className="itemsLoggedin">
            <span className="username">{user.username}</span>
            {user.isAdmin && (
              <button className="button" onClick={()=>Navigate("/admin")}>
                Admin Panel
              </button>
            )}
            <button className="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="items">
            <button className="button">Register</button>
            <button className="button" onClick={handelNavLogin}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
