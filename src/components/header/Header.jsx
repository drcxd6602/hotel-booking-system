import "./header.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import {
  faBed,
  faBus,
  faCalendar,
  faPerson,
  faPlane,
  faTaxi,
  faTrain,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";

import { DateRange } from "react-date-range";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const navigate = useNavigate();

  const handleOptions = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
    }));
  };

  const { dispatch } = useContext(SearchContext);

  const { user } = useContext(AuthContext);

  const handelSearch = () => {
     dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };
  return (
    <div className="header">
      <div className={type !== "list" ? "container" : "container isList"}>
        <div className="list">
          <div className="item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faTrain} />
            <span>Trains</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faBus} />
            <span>Buses</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="title">A lifetime of discounts? It's Genius.</h1>
            <p className="desc">
              Get rewarded for your travels - unlock savings of 10% or more with
              free gdbooking account
            </p>
            {
              !user && <button className="btn">Sign in/ Register</button>
            }
            <div className="search">
              <div className="item">
                <FontAwesomeIcon icon={faBed} className="icon" />
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="searchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="item">
                <FontAwesomeIcon icon={faCalendar} className="icon" />
                <span
                  className="text"
                  onClick={() => setOpenDate(!openDate)}
                >{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
                  dates[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="item">
                <FontAwesomeIcon icon={faPerson} className="icon" />
                <span
                  className="text"
                  onClick={() => setOpenOptions(!openOptions)}
                >{`${options.adults} adults ${options.children} children ${options.rooms} rooms`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="item">
                      <span className="text">Adult</span>
                      <div className="counter">
                        <button
                          className="d"
                          onClick={() => handleOptions("adults", "d")}
                          disabled={options.adults <= 1}
                        >
                          -
                        </button>
                        <span className="cnt">{`${options.adults}`}</span>
                        <button
                          className="i"
                          onClick={() => handleOptions("adults", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="item">
                      <span className="text">Children</span>
                      <div className="counter">
                        <button
                          className="d"
                          onClick={() => handleOptions("children", "d")}
                          disabled={options.children <= 1}
                        >
                          -
                        </button>
                        <span className="cnt">{`${options.children}`}</span>
                        <button
                          className="i"
                          onClick={() => handleOptions("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="item">
                      <span className="text">Rooms</span>
                      <div className="counter">
                        <button
                          className="d"
                          onClick={() => handleOptions("rooms", "d")}
                          disabled={options.rooms <= 0}
                        >
                          -
                        </button>
                        <span className="cnt">{`${options.rooms}`}</span>
                        <button
                          className="i"
                          onClick={() => handleOptions("rooms", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="item">
                <button className="btn" onClick={handelSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
