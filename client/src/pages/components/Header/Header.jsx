import NavBar from "./NavBar/NavBar";
import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const Header = () => {
  const loggedIn = useContext(AuthContext).loginToken.get ? true : false;



  return (
    <div className="header flex-row-bet">
      <div className="logo">
        <img
          src="/resources/eWriterLogo1Black.png"
          alt="eWriter logo"
          className="logo"
        />
      </div>

      <nav className="navBar">
        <NavBar loggedIn={loggedIn} />
      </nav>
    </div>
  );
};

export default Header;
