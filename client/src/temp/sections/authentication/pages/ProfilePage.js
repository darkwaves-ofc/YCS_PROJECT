import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthContext.js";

import Header from "../../../components/Headers/Header.js";
import ProfileDisplayer from "../features/profile/components/ProfileDisplayer.js";
import ProfileEditor from "../features/profile/components/ProfileEditor.js";
import getProfileData from "../features/profile/functions/getProfileData.js";

import profileIcon from "../../../assets/profileIcon.png";
const ProfilePage = () => {
  const navigate = useNavigate();
  const loginToken = useContext(AuthContext).loginToken.get;
  useEffect(() => {
    if (!loginToken) navigate("/");
  }, [navigate, loginToken]);

  const [renderingComponent, setRenderingComponent] = useState("displayer");
  const [profileData, setProfileData] = useState({});

  const [editCount, setEditCount] = useState(0);
  const refresh = () => {
    setEditCount((prev) => prev + 1);
    console.log("edited");
  };

  useEffect(() => {
    getProfileData(loginToken)
      .then((profileData) => {
        setProfileData(profileData);
      })
      .catch((err) => {
        if (err.response.data === "no_profile") navigate("/create_profile");

        //handle unknown errors and user credential errors
      });
  }, [loginToken, navigate, editCount]);

  return (
    <div>
      <Header />
      {renderingComponent === "displayer" && (
        <ProfileDisplayer
          profileData={profileData}
          setter={setRenderingComponent}
          profileIcon={profileIcon}
        />
      )}
      {renderingComponent === "editor" && (
        <ProfileEditor
          profileData={profileData}
          setter={setRenderingComponent}
          loginToken={loginToken}
          refresher={refresh}
          profileIcon={profileIcon}
        />
      )}
    </div>
  );
};

export default ProfilePage;
