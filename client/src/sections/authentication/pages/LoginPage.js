import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../AuthContext.js";

import LoginForm from "../features/login/components/LoginForm.js";
import Header from "../../../components/Headers/Header.js";

const LoginPage = () => {
  const navigate = useNavigate();
  const loginToken = useContext(AuthContext).loginToken.get;
  useEffect(() => {
    if (loginToken) navigate("/");
  }, [navigate,loginToken]);
  return (
    <div className="LoginPage">
      <Header />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
