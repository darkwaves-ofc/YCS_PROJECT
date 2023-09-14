import { Link } from "react-router-dom";
import "./ProfileDisplayer.css";

const ProfileDisplayer = (props) => {
  const profileData = props.profileData;

  const setRenderingComponent = props.setter;
  const displayEditor = () => {
    setRenderingComponent("editor");
  };

  return (
    <div className={classes.displayer}>
      <img
        src={props.profileIcon}
        alt="profile icon"
        className={classes.profileIcon}
      />
      <h1 className={classes.topic}>{profileData.username}</h1>
      <ul className={classes.detailContainer}>
        <li className={classes.detail}>Full Name: {profileData.fullName}</li>
        <li className={classes.detail}>Age: {profileData.age}</li>
        <li className={classes.detail}>Gender: {profileData.gender}</li>
        <li className={classes.detail}>Country: {profileData.country}</li>
        <li className={classes.detail}>Ocupation: {profileData.occupation}</li>
      </ul>
      <div className={classes.actionBtns}>
        <Link to="/logout">
          <button className={classes.logoutBtn}>Log out</button>
        </Link>
        <button className={classes.editBtn} onClick={displayEditor}>
          Edit
        </button>
        <Link to="/">
          <button className={classes.closeBtn}>Close</button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileDisplayer;
