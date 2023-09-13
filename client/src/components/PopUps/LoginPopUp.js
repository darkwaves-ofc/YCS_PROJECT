import { Link } from "react-router-dom";
import classes from "./LoginPopUp.module.css";

const LoginPopUp = (props) => {
  const setLoginWindow = props.toggler;

  return (
    <div className={classes.login_popup}>
      <p className={classes.request}>Login please</p>
      <div className={classes.action_btn_row}>
        <button className={`${classes.btn} ${classes.cancel_btn}`} onClick={() => setLoginWindow(false)}>cancel</button>
        <Link to="/login">
          <button className={`${classes.btn} ${classes.login_btn}`}>login</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPopUp;
