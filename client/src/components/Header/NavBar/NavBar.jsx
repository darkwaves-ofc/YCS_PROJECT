import { Link, NavLink } from "react-router-dom";
// import Hamburger from "./Hamburger";
import Cookies from "js-cookie";
import "./NavBar.css";

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

  const toggleLinks = () => {
    const profileLinks = document.getElementById("profileLinks");
    profileLinks.classList.toggle("active");
  };

  return (
    <div className="navBar flex-row">
      {/* <Hamburger /> */}
      <ul id="navMenu" className="navList flex-row-bet">
        {/* Common for all users */}
        <NavLink style={styleActive} to="/">
          <li className="navItem">Home</li>
        </NavLink>
        <NavLink style={styleActive} to="/dashboard/ewriter">
          <li className="navItem">essay&nbsp;writer</li>
        </NavLink>
        <NavLink style={styleActive} to="/aboutus">
          <li className="navItem">About&nbsp;us</li>
        </NavLink>
        <NavLink style={styleActive} to="/contactus">
          <li className="navItem">Contact&nbsp;us</li>
        </NavLink>

        {/* Only for Non-loged users */}
        {!loggedIn && (
          <NavLink style={styleActive} to="/auth/login">
            <li className="navItem">Login</li>
          </NavLink>
        )}
        {!loggedIn && (
          <NavLink style={styleActive} to="/auth/signup">
            <li className="navItem">Register</li>
          </NavLink>
        )}

        {/* Only for loged users */}
        {loggedIn && (
          <NavLink style={styleActive} to="/e_drive">
            <li className="navItem">eDrive</li>
          </NavLink>
        )}
        {loggedIn && (
          <div className="profileIcon" onClick={toggleLinks}>
            <img
              className="profileIconImg"
              src="/resources/accountIcon.png"
              alt="profile"
            />
            <div id="profileLinks" className="profileLinks flex-col">
              <div className="profileLink">
                <Link to="/profile">Profile</Link>
              </div>
              <div className="profileLink">
                <Link to="/logout">Log out</Link>
              </div>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
