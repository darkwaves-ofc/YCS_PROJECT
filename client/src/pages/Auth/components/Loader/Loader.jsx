import "./Loader.css";

const Loader = (props) => {
  return (
    <div className="Loader">
      <div className="spinner">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        <div className="bar4"></div>
        <div className="bar5"></div>
      </div>
      <p className="loadingPara">{props.message}</p>
    </div>
  );
};

export default Loader;
