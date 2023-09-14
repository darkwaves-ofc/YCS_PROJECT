import axios from "axios";

const clearContent = (slotId, loginToken,navigate) => {

  axios
    .post("http:/locahost:5002/clear_slot", { loginToken, slotId })
    .finally(() => navigate("/redirect", { state: "/e_drive" }));
};

export default clearContent;