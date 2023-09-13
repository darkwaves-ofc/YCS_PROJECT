import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";

import Cookies from "js-cookie";

import classes from "./NavBar.module.css";

const NavBar = (props) => {
  let loggedIn = props.loggedIn;

  if (Cookies.get("ewriter_login_token")) {
    loggedIn = true;
  }

  const styleActive = ({ isActive }) => {
    return {
      background: isActive ? "rgb(179, 139, 233)" : "none",
    };
  };

  return (
    <div className={classes.navBar}>
      <Hamburger />
      <ul id="navMenu" className={classes.navList}>
        <NavLink style={styleActive} to="/">
          <li className={classes.navItem}>Home</li>
        </NavLink>
        <NavLink style={styleActive} to="/essaywriter">
          <li className={classes.navItem}>essay&nbsp;writer</li>
        </NavLink>
        <NavLink style={styleActive} to="/aboutus">
          <li className={classes.navItem}>About&nbsp;us</li>
        </NavLink>
        <NavLink
          style={styleActive}
          to="/contactus"
        >
          <li className={classes.navItem}>Contact&nbsp;us</li>
        </NavLink>
        {loggedIn && (
          <NavLink style={styleActive} to="/e_drive">
            <li className={classes.navItem}>eDrive</li>
          </NavLink>
        )}
        {loggedIn && (
          <NavLink style={styleActive} to="/logout">
            <li className={classes.navItem}>Log&nbsp;out</li>
          </NavLink>
        )}
        {!loggedIn && (
          <NavLink style={styleActive} to="/login">
            <li className={classes.navItem}>Login</li>
          </NavLink>
        )}
        {!loggedIn && (
          <NavLink
            style={styleActive}
            to="/register"
          >
            <li className={classes.navItem}>Register</li>
          </NavLink>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
