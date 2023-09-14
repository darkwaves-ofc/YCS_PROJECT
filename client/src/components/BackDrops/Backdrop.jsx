import "./Backdrop.css";

const Backdrop = (props) => {
  return <div className="backdrop">{props.children}</div>;
};

export default Backdrop;
//do not wrok with content need to be scrolled since position fixed
