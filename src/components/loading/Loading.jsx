import "./loading.scss";
import LoadingC from "react-loading-components";

const Loading = () => {
  return (
    <div className="loading">
      <LoadingC type="tail_spin" width={100} height={100} fill="#000" />
    </div>
  );
};

export default Loading;
