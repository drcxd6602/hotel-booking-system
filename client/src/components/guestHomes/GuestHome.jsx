import useFetch from "../../hooks/useFetch";
import Loading from "../loading/Loading";
import "./guestHome.scss";
const GuestHome = () => {
  const { data, loading, error } = useFetch("hotels?featured=true&limit=5");

  return (
    <div className="guestHome">
      {loading
        ? <Loading/>
        : data.map((item, i) => (
            <div className="item" key={i}>
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/270323047.webp?k=bade09d7901e1282156f13c3b39e3a8b9c8d45170b2f1184565d3fc304c42d70&o="
                alt=""
                className="img"
              />
              <h2 className="title">{item.name}</h2>
              <p className="location">{item.address}</p>
              <div className="price">
                Starting from <span>₹ {item.chepestPrice}</span>
              </div>
              <div className="ratings">
                <button>8.7</button>
                <span>Excellent</span>
              </div>
            </div>
          ))}
    </div>
  );
};

export default GuestHome;
