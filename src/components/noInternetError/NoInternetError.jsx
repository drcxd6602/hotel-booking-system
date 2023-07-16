import "./noInternetError.scss";

const NoInternetError = ({ message }) => {
  return (
    <div className="error">
      <h2 className="errorSorry">Sorry :(</h2>
      <span className="errorName">{message}</span>
    </div>
  );
};

export default NoInternetError;
