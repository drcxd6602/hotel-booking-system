import { Link } from "react-router-dom";
import "./searchItem.scss";

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/17071483.webp?k=fc241ff6d58d7585152b8f729556a23967842047559058765d4914aa52e20b05&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.title}</h1>
        <span className="siDistance">{item.distance}</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitles">Luxury Room Garden View</span>
        <span className="siFeatures">Beds: 1 double or 2 twins</span>
        <span className="siCancelOp">FREE cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button> 8.9 </button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rs {item.chepestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
