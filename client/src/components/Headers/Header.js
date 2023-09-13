import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";

const Header = () => {
  const loggedIn = useContext(AuthContext).loginToken.get ? true : false;

  const toggleLinks = () => {
    const profileLinks = document.getElementById("profileLinks");
    profileLinks.classList.toggle(classes.active);
  };

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img
          src="/resources/eWriterLogo1Black.png"
          alt="eWriter logo"
          className={classes.logo}
        />
      </div>
      <div className={classes.topic}>
        <h1 className={classes.companyName}>e Writer</h1>
        <p className={classes.slogon}>Writing made easy</p>
      </div>
      {loggedIn && (
        <div className={classes.profileIcon} onClick={toggleLinks}>
          <img
            className={classes.profileIconImg}
            src="/resources/accountIcon.png"
            alt="profile"
          />
          <div id="profileLinks" className={classes.profileLinks}>
            <div className={classes.profileLink}>
              <Link to="/profile">Profile</Link>
            </div>
            <div className={classes.profileLink}>
              <Link to="/logout">Log out</Link>
            </div>
          </div>
        </div>
      )}
      <nav className={classes.navBar}>
        <NavBar loggedIn={loggedIn} />
      </nav>
    </div>
  );
};

export default Header;
