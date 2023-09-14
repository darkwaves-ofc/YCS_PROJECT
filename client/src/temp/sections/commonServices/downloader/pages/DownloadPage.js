import { useLocation } from "react-router-dom";
import Downloader from "../components/Downloader.js";

const DownloadPage = () => {

  const location = useLocation();

  console.log(location.state);

  return (
    <>
      <Downloader data={location.state}/>
    </>
  );
};

export default DownloadPage;