import { Route, Routes, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import Login from "./Login/Login.jsx";
import SignUp from "./SignUp/SignUp.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";

const AuthPage = () => {
  const navigate = useNavigate();
  const loginToken = useContext(AuthContext).loginToken.get;
  useEffect(() => {
    if (loginToken) navigate("/");
  }, [navigate, loginToken]);

  return (
    <div className="RegisterPage">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default AuthPage;
