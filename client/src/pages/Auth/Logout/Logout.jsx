import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthContext";
import Cookies from "js-cookie";

const LogoutPage = () => {
  const loginToken = useContext(AuthContext).loginToken;
  const profileCreated = useContext(AuthContext).profileCreated;
  const navigate = useNavigate();

  useEffect(() => {
    if (loginToken.get) {
      Cookies.remove("ewriter_login_token",{path: "/"});
      Cookies.remove("profile_created",{path: "/"});
      loginToken.set(undefined);
      profileCreated.set(false);
    }

    navigate("/");
  }, [navigate,loginToken,profileCreated]);
};

export default LogoutPage;
