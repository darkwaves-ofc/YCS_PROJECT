import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthContext.js";
import GmailVerifier from "./components/GmailVerifier.jsx";

const VerifyGmailPage = () => {
  const navigate = useNavigate();
  const loginToken = useContext(AuthContext).loginToken.get;

  useEffect(() => {
    if (loginToken) navigate("/");
  }, [navigate, loginToken]);

  return (
    <div id="verifyGmail">
      <GmailVerifier />
    </div>
  );
};

export default VerifyGmailPage;
