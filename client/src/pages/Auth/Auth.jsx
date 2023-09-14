import { Route, Routes, useNavigate } from "react-router-dom";
import { Suspense, lazy, useContext, useEffect } from "react";
const Login = lazy(() => import("./Login/Login.jsx"));
const SignUp = lazy(() => import("./SignUp/SignUp.jsx"));
import { AuthContext } from "../../context/AuthContext.jsx";
const LogoutPage = lazy(() => import("./Logout/Logout.jsx"));

const VerifyGmail = lazy(() => import("./Verify/Verify.jsx"));
const ProfilePage = lazy(() => import("./profile/Profile.jsx"));
const CreateProfilePage = lazy(() =>
  import("./profile/components/ProfileCreator/ProfileCreator.jsx")
);
const RedirectPage = lazy(() => import("./redirect/redirect.jsx"));

const AuthPage = () => {
  const navigate = useNavigate();
  const loginToken = useContext(AuthContext).loginToken.get;
  useEffect(() => {
    if (loginToken) navigate("/");
  }, [navigate, loginToken]);

  return (
    <div className="AuthPage">
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Routes>
          {/* {add header here and remove from seperate pages,wait until essay writer routes added,their headers are different} */}
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/logout" exact element={<LogoutPage />}></Route>
          <Route path="/register" exact element={<SignUp />}></Route>
          <Route path="/verifygmail" exact element={<VerifyGmail />}></Route>
          <Route path="/profile" exact element={<ProfilePage />}></Route>
          <Route
            path="/create_profile"
            exact
            element={<CreateProfilePage />}
          ></Route>
          <Route path="/redirect" exact element={<RedirectPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default AuthPage;
