import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthContext.js";
import Header from "../../../components/Headers/Header.js";
import GmailVerifier from "../features/verifyGmail/components/GmailVerifier.js";

const VerifyGmailPage = () => {
  const navigate = useNavigate();
  const loginToken = useContext(AuthContext).loginToken.get;

  useEffect(() => {
    if(loginToken)
      navigate("/");
  },[navigate,loginToken])


  return (
    <div id="verifyGmail">
      <Header />
      <GmailVerifier />
    </div>
  );
};

export default VerifyGmailPage;
