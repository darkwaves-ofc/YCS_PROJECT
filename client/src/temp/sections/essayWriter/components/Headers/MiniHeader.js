import MiniNavBar from "../NavBar/MiniNavBar.js";
import { Link } from "react-router-dom";
import classes from "./MiniHeader.module.css";
import { useContext } from "react";
import { AuthContext } from "../../../../AuthContext.js";

const MiniHeader = () => {
  const loggedIn = useContext(AuthContext).loginToken.get ? true : false;

  const toggleLinks = () => {
    const profileLinks = document.getElementById("profileLinks");
    profileLinks.classList.toggle(classes.active);
  };

  return (
    <div className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>
          <img
            src="/resources/eWriterLogo1Black.png"
            alt="eWriter logo"
            className={classes.logo}
          />
        </div>
      </Link>
      <div></div>
      <nav>
        <MiniNavBar />
      </nav>
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
    </div>
  );
};

export default MiniHeader;
