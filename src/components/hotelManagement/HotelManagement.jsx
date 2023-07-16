import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./hotelManagement.scss";
import {
  faAdd,
  faCheck,
  faCheckDouble,
  faCross,
  faEdit,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import useFetch from "../../hooks/useFetch";
import Loading from "../loading/Loading";


const HotelManagement = () => {
  const [filterPrice, setFilterPrice] = useState();
  const [filterRatings, setFilterRatings] = useState();
  const [filterRooms, setFilterRooms] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [hotelName, setHotelName] = useState();
  const [hotelType, setHotelType] = useState("resort");
  const [hotelCity, setHotelCity] = useState();
  const [hotelAddress, setHotelAddress] = useState();
  const [hotelDistance, setHotelDistance] = useState();
  const [hotelTitle, setHotelTitle] = useState();
  const [hotelDescription, setHotelDescription] = useState();
  const [hotelPrice, setHotelPrice] = useState();
  const [hotelIsFeatured, setHotelIsFeatured] = useState();
  const [hotelCredential, setHotelCredentials] = useState();
  const [loader, setLoader] = useState(false); 
  const [hotelDataBase, setHotelDataBase ] = useState([]);

  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      setLoader(true);
      try {
        const res = await axios.get("/hotels");
        if (res.data.length !== hotelDataBase.length) {
          setHotelDataBase(res.data);
        }
      } catch (error) {
        console.log(error);
      }
      setLoader(false);
    };
    fetchData();
    setLoader(false);
  }, [hotelDataBase]);

  useEffect(() => {
    setHotelCredentials({
      name: hotelName,
      type: hotelType,
      city: hotelCity,
      address: hotelAddress,
      distance: hotelDistance,
      title: hotelTitle,
      desc: hotelDescription,
      chepestPrice: hotelPrice,
    });
  }, [
    hotelName,
    hotelType,
    hotelCity,
    hotelAddress,
    hotelDistance,
    hotelTitle,
    hotelDescription,
    hotelPrice,
  ]);

  const handelAddHotel = async (e) => {
    e.preventDefault();
    try {
      console.log(hotelCredential);
      const res = await axios.post("/hotels", hotelCredential);
      console.log(res);
      setOpenModal(false);
      handleSubmit(e);
      setHotelDataBase([]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Added succesfully");
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      setLoader(true);
      const res = await axios.delete(`/hotels/find/${id}`);
      toast.success("Deleted Succesfully");
      setLoader(false);
      setHotelDataBase([]);
    } catch (error) {
      console.log(error);
    }
  }


  const optionHandeler = (e) => {
    setHotelType(e.target.value); 
    console.log(hotelType);
  }

  return (
    <div className="aph">
      <div
        className={
          openModal ? "aphContainer aphContainerOpenModal" : "aphContainer"
        }
      >
        <div className="aphTitle">
          <span className="aphText">Hotels List</span>
        </div>

        <div className="aphHeader">
          <span className="aphPath">
            {" "}
            <span className="aphPathOne">Dashboard</span>
            <span className="aphPathTwo">{">"}</span>
            <span className="aphPathThree">Hotels</span>
          </span>
        </div>

        <div className="aphTabel">
          <div className="aphFilters">
            <span className="aphFiltersTitle">Filters</span>
            <div className="aphFiltersContainer">
              <div className="aphFlocation">
                <label htmlFor="location">Location:</label>
                <input type="text" name="location" />
              </div>
              <div className="aphTypes">
                <div className="aphTypeItem">
                  <label htmlFor="location">Villa</label>
                  <input type="checkbox" name="location" />
                </div>
                <div className="aphTypeItem">
                  <label htmlFor="location">Resort</label>
                  <input type="checkbox" name="location" />
                </div>
                <div className="aphTypeItem">
                  <label htmlFor="location">Hotel</label>
                  <input type="checkbox" name="location" />
                </div>
                <div className="aphTypeItem">
                  <label htmlFor="location">Apartment</label>
                  <input type="checkbox" name="location" />
                </div>
                <div className="aphTypeItem">
                  <label htmlFor="location">Cabin</label>
                  <input type="checkbox" name="location" />
                </div>
              </div>
              <div className="aphMinRating">
                <span className="aphMinRatingsLabel">Minimum Rating: </span>
                <input
                  type="range"
                  max={4}
                  min={1}
                  onChange={(e) => setFilterRatings(e.target.value)}
                />
                <span className="aphMinRatingText">{filterRatings}</span>
              </div>

              <div className="aphMinPrice">
                <span className="aphMinPriceLabel">Minimum Price: </span>
                <input
                  type="range"
                  max={100000}
                  min={100}
                  onChange={(e) => setFilterPrice(e.target.value)}
                />
                <span className="aphMinPriceText">{filterPrice}</span>
              </div>

              <div className="aphMinRooms">
                <span className="aphMinRoomsLabel">Minimum Rooms: </span>
                <input
                  type="range"
                  max={50}
                  min={2}
                  onChange={(e) => setFilterRooms(e.target.value)}
                />
                <span className="aphMinPriceText">{filterRooms}</span>
              </div>
            </div>
          </div>
          <div className="aphTabelContainer">
            <div className="aphTabelSearch">
              <input type="text" className="aphInputText" />
              <span className="aphInputIconText">
                Search
                <FontAwesomeIcon icon={faSearch} className="aphInputIcon" />
              </span>
              <span className="aphAddUser" onClick={() => setOpenModal(true)}>
                Add
                <FontAwesomeIcon icon={faAdd} className="aphInputIcon" />
              </span>
            </div>
            <div className="aphTabelLabels">
              <span className="aphHotelNameL">Name</span>
              <span className="aphHotelLocationL">Location</span>
              <span className="aphHotelTypeL">Type</span>
              <span className="aphHotelRatingL">Ratings</span>
              <span className="aphHotelRoomsL">Rooms</span>
              <span className="aphChepestPriceL">Price</span>
              <span className="aphEditHotelL">Edit</span>
              <span className="aphDeleteHotelL">Delete</span>
            </div>
            {loader ? (
              <Loading />
            ) : (
              hotelDataBase.map((item, index) =>
                loader ? (
                  <Loading />
                ) : (
                  <div className="aphTabelContent">
                    <span className="aphHotelName">{item.name}</span>
                    <span className="aphHotelLocation">{item.city}</span>
                    <span className="aphHotelType">{item.type}</span>
                    <span className="aphHotelRating">4</span>
                    <span className="aphHotelRooms">{item.rooms.length}</span>
                    <span className="aphChepestPrice">{item.chepestPrice}</span>
                    <span className="aphEditHotel">
                      <FontAwesomeIcon icon={faEdit} />
                    </span>
                    <span
                      className="aphDeleteHotel"
                      onClick={(e) => handleDelete(e, item._id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </span>
                  </div>
                )
              )
            )}
          </div>
        </div>
      </div>
      {openModal && (
        <div className="aphAddHotelModal">
          <div className="aphMtitleMain">
            <span className="aptTxt">Hotel details</span>
          </div>
          <div className="aphAddHotelModalContainer">
            <div className="aphMItem">
              <span className="aphMnameL">Name: </span>
              <input
                type="text"
                className="aphMItemI"
                onChange={(e) => setHotelName(e.target.value)}
              />
            </div>
            <div className="g2">
              <div className="aphMtype">
                <span className="aphMtypeL">Type: </span>
                <select
                  name="htype"
                  id=""
                  className="aphMtypeLs"
                  onChange={optionHandeler}
                >
                  <option selected> resort </option>
                  <option> villa </option>
                  <option> apartment </option>
                  <option> restaurent </option>
                  <option> cabin </option>
                </select>
              </div>
              <div className="aphMItem">
                <span className="aphMcityL">City: </span>
                <input
                  type="text"
                  className="aphMItemI"
                  onChange={(e) => setHotelCity(e.target.value)}
                />
              </div>
            </div>
            <div className="g3">
              <div className="aphMItem">
                <span className="aphMItemLt">Address: </span>
                <textarea
                  type="text"
                  className="aphMItemIt"
                  onChange={(e) => setHotelAddress(e.target.value)}
                />
              </div>
              <div className="aphMItem">
                <span className="aphMdistL">Distance(from center): </span>
                <input
                  type="text"
                  className="aphMItemI"
                  onChange={(e) => setHotelDistance(e.target.value)}
                />
              </div>
            </div>

            <div className="aphMItem">
              <span className="aphMtitleL">Title: </span>
              <input
                type="text"
                className="aphMItemI"
                onChange={(e) => setHotelTitle(e.target.value)}
              />
            </div>
            <div className="aphMItem">
              <span className="aphMItemLt">description: </span>
              <textarea
                type="text"
                className="aphMItemIt"
                onChange={(e) => setHotelDescription(e.target.value)}
              />
            </div>

            <div className="aphMItem">
              <span className="aphMcheapestPricesL">Cheapest Price: </span>
              <input
                type="number"
                className="aphMItemI"
                min={0}
                onChange={(e) => setHotelPrice(e.target.value)}
              />
            </div>

            <div className="aphBtns">
              <button
                type="submit"
                className="aphBtn"
                style={{
                  backgroundColor: "#DB504A",
                }}
                onClick={() => setOpenModal(false)}
              >
                Back
              </button>
              <button type="submit" className="aphBtn" onClick={handelAddHotel}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default HotelManagement;
