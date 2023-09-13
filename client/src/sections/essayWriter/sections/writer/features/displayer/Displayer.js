import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { WriterContext } from "../../WriterContext";
import classes from "./Displayer.module.css";
import SaveWindow from "./components/SaveWindow";

import FormSubmitLoader from "../../../../../../components/Loaders/FormSubmitLoader.js";
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
    <div className={classes.displayer}>
      {/* <ul className={classes.reqInfoList}>
        <li className={classes.reqInfo}>Topic: {pendingResult.topic}</li>
        <li className={classes.reqInfo}>Type: {pendingResult.reqType}</li>
        <li className={classes.reqInfo}>Count: {pendingResult.count}</li>
      </ul> */}
      <h2 className={classes.topic}>{topic}</h2>
      {body ? (
        <>
          <div className={classes.resultViewer}>
            {body}
          </div>
          <div className={classes.resultOptions}>
            <Link to="/essaywriter">
              <button
                className={`${classes.actionBtn} ${classes.deleteBtn}`}
                onClick={deleteResult}
              >
                Delete
              </button>
            </Link>
            <Link
              to="/download"
              state={{ topic: topic, content: body}}
            >
              <button className={`${classes.actionBtn} ${classes.downloadBtn}`}>
                Download
              </button>
            </Link>
            <button
              className={`${classes.actionBtn} ${classes.saveBtn}`}
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
        <div className={classes.loader}>
          <FormSubmitLoader message={"Writing"} />
        </div>
      )}
    </div>
  );
};

export default Displayer;
