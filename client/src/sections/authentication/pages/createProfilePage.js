import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "../../../AuthContext.js";

import Header from "../../../components/Headers/Header.js";
import ProfileCreator from "../features/profile/components/ProfileCreator.js";

const CreateProfilePage = () => {

  const navigate = useNavigate();
  const loginToken = useContext(AuthContext).loginToken.get;
  const profileCreated = useContext(AuthContext).profileCreated.get;

  console.log(profileCreated)
  useEffect(() => {
    if (!loginToken) navigate("/login");
    else if(profileCreated) navigate("/profile");
  }, [navigate,loginToken,profileCreated]);

  return (
    <>
      <Header />
      <ProfileCreator />
    </>
  );
};

export default CreateProfilePage;
