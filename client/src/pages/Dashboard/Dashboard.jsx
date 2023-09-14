import { Route, Routes } from "react-router-dom";
// import FeaturesBlock from "./E_Book";
import Writer from "./Writer/Writer.jsx";
import Intro from "./Intro/Intro.jsx";

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="eWriter" element={<Intro />} />
        <Route path="eWriter/writer" element={<Writer />} />
      </Routes>
    </>
  );
};

export default Dashboard;
