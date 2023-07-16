import useFetch from "../../hooks/useFetch";
import "./featured.scss";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "hotels/countByCities?cities=Pune,Mumbai,Delhi"
  );

  console.log({ data });

  return (
    <div className="featured">
      {
        loading ? "Please wait,Loaading" : <>
        <div className="item">
        <img
          src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
          alt=""
        />
        <div className="titles">
          <h1>Pune</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      <div className="item">
        <img
          src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450113.jpeg?k=76b3780a0e4aacb9d02ac3569b05b3c5e85e0fd875287e9ac334e3b569f320c7&o="
          alt=""
        />
        <div className="titles">
          <h1>Mumbai</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="item">
        <img
          src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450093.jpeg?k=aa5cc7703f3866af8ffd6de346c21161804a26c3d0a508d3999c11c337506ae1&o="
          alt=""
        />
        <div className="titles">
          <h1>Delhi</h1>
              <h2>{data[2]} properties</h2>
        </div>
      </div></>
      }
    </div>
  );
};

export default Featured;
