import RegisterForm from "../features/register/components/RegisterForm.js";
import Header from "../../../components/Headers/Header.js"
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../AuthContext.js";

const RegisterPage = () => {

  const navigate = useNavigate();
  const loginToken = useContext(AuthContext).loginToken.get;
  useEffect(()=> {
    if(loginToken)
      navigate("/");
  },[navigate,loginToken])

  return (
    <div className="RegisterPage">
        <Header />
        <RegisterForm />
    </div>
  );
};

export default RegisterPage;
