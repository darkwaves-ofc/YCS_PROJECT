import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext.js";

import classes from "./MiniNavBar.module.css";

const MiniNavBar = (props) => {
  let loggedIn = props.loggedIn;

  if (useContext(AuthContext).loginToken.get) {
    loggedIn = true;
  }

  const styleActive = ({ isActive }) => {
    return {
      background: isActive ? "rgb(179, 139, 233)" : "none",
    };
  };

  return (
    <ul id="navMenu" className={classes.navList}>
      <NavLink className={classes.navLink} style={styleActive} to="/">
        <li className={classes.navItem}>Home</li>
      </NavLink>
      {loggedIn && (
        <NavLink className={classes.navLink} style={styleActive} to="/e_drive">
          <li className={classes.navItem}>eDrive</li>
        </NavLink>
      )}
      {!loggedIn && (
        <NavLink className={classes.navLink} style={styleActive} to="/login">
          <li className={classes.navItem}>Login</li>
        </NavLink>
      )}
      {!loggedIn && (
        <NavLink className={classes.navLink} style={styleActive} to="/register">
          <li className={classes.navItem}>Register</li>
        </NavLink>
      )}
    </ul>
  );
};

export default MiniNavBar;
