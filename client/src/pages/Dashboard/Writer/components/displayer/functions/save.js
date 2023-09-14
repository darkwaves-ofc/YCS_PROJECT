import axios from "axios";

const save = async (loginToken, slotId,writing) => {
    console.log(writing)
    await axios
    .post("http://localhost:5002/edrive/save_writing", {
        loginToken,
        slotId,
        writing,
      })
      .catch((err) => console.log(err));
}

export default save;