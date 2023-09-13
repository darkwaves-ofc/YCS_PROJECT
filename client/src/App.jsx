// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import "./App.css";
import Home from "./pages/Home/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthPage from "./pages/Auth/Auth";
import Header from "./pages/components/Header/Header";

// import HomePage from "./sections/home/HomePage.js";
// import EssayWriterRoutes from "./sections/essayWriter/EssayWriterRoutes.js";
// import AuthRoutes from "./sections/authentication/AuthRoutes.js";
// import CommonServicesRoutes from "./sections/commonServices/CommonServicesRoutes.js";

//const HomePage = lazy(() => import("./sections/home/HomePage.js"));

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth/*" element={<AuthPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// {/* <BrowserRouter>
//     <Routes>
//       <Route path="/" exact element={<HomePage />}></Route>
//     </Routes>
//     <EssayWriterRoutes />
//     <AuthRoutes />
//     <CommonServicesRoutes />
//   </BrowserRouter> */}
