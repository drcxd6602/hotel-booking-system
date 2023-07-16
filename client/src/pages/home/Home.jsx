import { useContext, useEffect, useState } from "react";
import Destinations from "../../components/destinations/Destinations";
import Email from "../../components/emailList/Email";
import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import GuestHome from "../../components/guestHomes/GuestHome";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.scss";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      setShowModal(false);
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      setShowModal(false);
    }
  };
  return (
    <div className="home">
      <Navbar setShowModal={setShowModal} showModal={showModal} />
      <Header />
      <div className="homeContainer">
        <h1 className="title">Trending destinations</h1>
        <Destinations />
        <h1 className="title">Explore India</h1>
        <Featured />
        <h1 className="title">Browse by Property Type</h1>
        <PropertyList />
        <h1 className="title">Homes guests love</h1>
        <GuestHome />
        <Email />
        <Footer />

        {showModal && (
          <div className="loginModal">
            <span className="lmTitle">Login</span>
            <div className="loginModalContainer">
              <div className="lmCloseICon" onClick={() => setShowModal(false)}>
                <FontAwesomeIcon icon={faClose} />
              </div>
              <div className="lmItem">
                <input
                  type="text"
                  className="lmInput"
                  required
                  id="username"
                  placeholder="username"
                  onChange={handleChange}
                />
              </div>
              <div className="lmItem">
                <input
                  type="password"
                  className="lmInput"
                  required
                  id="password"
                  placeholder="password"
                  onChange={handleChange}
                />
              </div>
              <div className="lmItem">
                <button className="lmLogin" onClick={handleClick}>
                  Login
                </button>
              </div>
              <spna className="lmToggleLogin">
                Not Registered? <span>Create an Account</span>
              </spna>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
