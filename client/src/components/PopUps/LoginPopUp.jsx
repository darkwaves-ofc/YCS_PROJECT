import { Link } from "react-router-dom";
import "./LoginPopUp.css";

const LoginPopUp = (props) => {
  const setLoginWindow = props.toggler;

  return (
    <div className="login_popup">
      <p className="request">Login please</p>
      <div className="action_btn_row">
        <button
          className="btn cancel_btn"
          onClick={() => setLoginWindow(false)}
        >
          cancel
        </button>
        <Link to="/login">
          <button className="btn login_btn">login</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPopUp;
