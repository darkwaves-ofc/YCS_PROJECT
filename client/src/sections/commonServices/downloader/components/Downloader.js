import { useEffect, useState } from "react";

import getPdfUrl from "../functions/GetPdfUrl.js";
import classes from "./Downloader.module.css";

const Downloader = (props) => {
  const data = props.data;
  const [pdfUrl, setpdfUrl] = useState("");

  useEffect(() => {
    getPdfUrl(data)
      .then((url) => setpdfUrl(url))
      .catch((err) => console.log(err));
  }, [data]);

  return (
    <div className={classes.downloadContainer}>
      {pdfUrl ? (
        <>
          <p className={classes.downloadPrompt}>
            Click the Download button shown below to download the pdf file.
          </p>
          <a href={pdfUrl} download={props.data.topic}>
            <button className={classes.downloadBtn}>
              <i className="fa fa-download" /> Download
            </button>
          </a>
        </>
      ) : (
        <>
          <p className={classes.downloadPrompt}>
            Your file is preparing to download.wait few seconds.{" "}
          </p>
          <button className={classes.downloadBtn}>Loading</button>
        </>
      )}
    </div>
  );
};

export default Downloader;
