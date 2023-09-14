import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { WriterContext } from "../../context/writerContext";
import "./Displayer.css";
import SaveWindow from "./components/SaveWindow/SaveWindow";

import FormSubmitLoader from "../../../../../components/Loader/FormSubmitLoader/FormSubmitLoader";
import Cookies from "js-cookie";

const Displayer = () => {
  const [displaySaveWindow, setDisplaySaveWindow] = useState(false);

  const pendingResult = useContext(WriterContext).pendingResult.get;
  const result = useContext(WriterContext).result.get;

  const topic = result.topic || pendingResult.topic;
  const body = result.body;

  const deleteResult = async () => {
    Cookies.remove("result", { path: "/" });
  };

  console.log(result);

  return (
    <div className="displayer">
      {/* <ul className="reqInfoList">
    <li className="reqInfo">Topic: {pendingResult.topic}</li>
    <li className="reqInfo">Type: {pendingResult.reqType}</li>
    <li className="reqInfo">Count: {pendingResult.count}</li>
  </ul> */}
      <h2 className="topic">{topic}</h2>
      {body ? (
        <>
          <div className="resultViewer">{body}</div>
          <div className="resultOptions">
            <Link to="/essaywriter">
              <button className="actionBtn deleteBtn" onClick={deleteResult}>
                Delete
              </button>
            </Link>
            <Link to="/download" state={{ topic: topic, content: body }}>
              <button className="actionBtn downloadBtn">Download</button>
            </Link>
            <button
              className="actionBtn saveBtn"
              onClick={() => setDisplaySaveWindow(true)}
            >
              Save
            </button>
          </div>
          {displaySaveWindow && (
            <SaveWindow
              writing={{ topic, body }}
              toggler={setDisplaySaveWindow}
            />
          )}
        </>
      ) : (
        <div className="loader">
          <FormSubmitLoader message={"Writing"} />
        </div>
      )}
    </div>
  );
};

export default Displayer;
