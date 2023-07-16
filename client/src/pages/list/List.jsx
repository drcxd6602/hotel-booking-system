import "./list.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import format from "date-fns/format";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/loading/Loading";
import NoInternetError from "../../components/noInternetError/NoInternetError";

const List = () => {
  const location = useLocation();
  const obj = location.state;
  const [destination, setDestination] = useState(obj.destination);
  const [dates, setDates] = useState(obj.dates);
  const [options, setOptions] = useState(obj.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 100000}`
  );

  console.log(data);
 
  const [openDate, setOpenDate] = useState(false);

  const handleClick = () => {
    console.log(destination);
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label className="destLabel" htmlFor="">
                Destination
              </label>
              <input
                className="destInput"
                placeholder={destination}
                type="text"
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="lsItem">
              <label htmlFor="">Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
                  dates[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDates([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dates}
                  className="dateOfStay"
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="lsItem">
              <div className="optionsWrapper">
                <label>Options</label>
                <div className="lsOption">
                  <span className="lsOptionText">
                    Min price <small>(per night)</small>
                  </span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    onChange={(e) => setMin(e.target.value)}
                  />
                </div>
                <div className="lsOption">
                  <span className="lsOptionText">
                    Max price <small>(per night)</small>
                  </span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    onChange={(e) => setMax(e.target.value)}
                  />
                </div>
                <div className="lsOption">
                  <span className="lsOptionText">Adults</span>
                  <input
                    min={1}
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.adults}
                  />
                </div>
                <div className="lsOption">
                  <span className="lsOptionText">Children</span>
                  <input
                    min={0}
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOption">
                  <span className="lsOptionText">Rooms</span>
                  <input
                    min={1}
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.rooms}
                  />
                </div>
              </div>
            </div>
            <button className="liBtn" onClick={handleClick}>
              Search
            </button>
          </div>
          <div className="listResult">
            {loading ? (
              <Loading />
            ) : error ? (
              <NoInternetError message={error.message} />
            ) : (
              data.map((item, i) => <SearchItem item={item} key={item._id} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
