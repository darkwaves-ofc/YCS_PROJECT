import { lazy,Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const RegisterPage = lazy(() =>
  import("./pages/RegisterPage.js")
);
const LoginPage = lazy(() =>
  import("./pages/LoginPage.js")
);
const LogoutPage = lazy(() =>
  import("./pages/LogoutPage.js")
);
const VerifyGmail = lazy(() =>
  import("./pages/VerifyGmailPage.js")
);

const ProfilePage = lazy(() =>
  import("./pages/ProfilePage.js")
);

const CreateProfilePage = lazy(() =>
  import("./pages/createProfilePage.js")
);

const RedirectPage = lazy(() =>
  import("./pages/RedirectPage.js")
);

const AuthRoutes = () => {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <Routes>
        {/* {add header here and remove from seperate pages,wait until essay writer routes added,their headers are different} */}
        <Route path="/login" exact element={<LoginPage />}></Route>
        <Route path="/logout" exact element={<LogoutPage />}></Route>
        <Route path="/register" exact element={<RegisterPage />}></Route>
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
  );
};

export default AuthRoutes;
