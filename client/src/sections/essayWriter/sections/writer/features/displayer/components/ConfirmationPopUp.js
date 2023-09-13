import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../../../../AuthContext";
import save from "../functions/save";
import classes from "./ConfirmationPopUp.module.css";
const ConfirmationPopUp = (props) => {
  const navigate = useNavigate();
  const loginToken = useContext(AuthContext).loginToken.get;
  const slotId = props.selectedSlot;
  const writing = props.writing;
  const setReplaceTry = props.toggler;

  const handleConfirm = (e) => {
    e.target.disabled = true;
    save(loginToken, slotId, writing).finally(() =>
      navigate("/redirect", { state: "/essaywriter/writer" })
    );
  };

  return (
    <div className={classes.backdrop}>
      <div className={classes.confirmation_window}>
        <p className={classes.replace_warning}>
          Do you want to replace current content in {slotId} with new content
        </p>
        <div className={classes.action_btn_row}>
          <button
            className={`${classes.btn} ${classes.cancel_btn}`}
            onClick={() => setReplaceTry(false)}
          >
            cancel
          </button>
          <button
            className={`${classes.btn} ${classes.save_btn}`}
            onClick={(e) => handleConfirm(e)}
          >
            confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopUp;
