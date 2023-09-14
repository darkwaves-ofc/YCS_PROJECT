import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../../../../context/AuthContext";
import save from "../../functions/save";
import "./ConfirmationPopUp.css";
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
    <div className="backdrop">
      <div className="confirmation_window">
        <p className="replace_warning">
          Do you want to replace current content in {slotId} with new content
        </p>
        <div className="action_btn_row">
          <button
            className="btn cancel_btn"
            onClick={() => setReplaceTry(false)}
          >
            cancel
          </button>
          <button className="btn save_btn" onClick={(e) => handleConfirm(e)}>
            confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopUp;
