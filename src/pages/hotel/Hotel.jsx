import "./hotel.scss";
import { useContext, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Email from "../../components/emailList/Email";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useLocation } from "react-router-dom";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/loading/Loading";
import { SearchContext } from "../../context/SearchContext";
import Reserve from "../../components/reserve/Reserve";
import { AuthContext } from "../../context/AuthContext";

const Hotel = () => {
  const photos = [
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/280948268.jpg?k=7eb6bdc0a2cdd0d2da35cee300707886cb6abdc51a6f1622f69bb857a57df087&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/280948391.jpg?k=227aed0ca1a53630294e00cc1a314e8089b4c30a5589478043dc3bccecfdd364&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/280950730.jpg?k=c3c5db2ee129e9dd588eddc4cd90e6e6f66aaaa2a5edeba1511a006725a282aa&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/280950730.jpg?k=c3c5db2ee129e9dd588eddc4cd90e6e6f66aaaa2a5edeba1511a006725a282aa&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/280950292.jpg?k=89e3a95397a8c8f6dd345dbc1a7ea668d2ebd05c5953c856c0dc741d4e714ef5&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/280950287.jpg?k=ec7cf222e55bc51b78780a58505bfb7f9e9999c928de818ad54ada322fa1ce3d&o=&hp=1",
  ];

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const hotelId = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/hotels/find/${hotelId}`);

  const { dates, options } = useContext(SearchContext);

  const MILISECONODS_PER_DAY = 1000 * 24 * 60 * 60;

  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILISECONODS_PER_DAY);
    return diffDays;
  }
  
  const days = dayDifference(dates[0].startDate , dates[0].endDate);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const { user } = useContext(AuthContext);
  const handleClick = (e) => {

    e.preventDefault();
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login")
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber]} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        {loading ? (
          <Loading />
        ) : (
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location - {data.distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.chepestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
              {photos.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    src={photo}
                    alt=""
                    className="hotelImg"
                    onClick={() => handleOpen(i)}
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days} night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>${days * data.chepestPrice * options.rooms}</b> ({days}{" "}
                  nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
        )}
        <Email />
        <Footer />
      </div>
      {openModal && <Reserve setOpen={setOpenModal} hotelId={hotelId}/>}
    </div>
  );
};

export default Hotel;
