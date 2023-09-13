import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../AuthContext.js";
import EDrive from "../components/EDrive.js";

const EDrivePage = () => {
  const loginToken = useContext(AuthContext).loginToken.get;
  const navigate = useNavigate();

  const [slots,setSlots] = useState();
  console.log(slots);

  useEffect(() => {
    if(!loginToken) navigate("/login");
    else {
      axios.post("http://localhost:5002/edrive/give_saved_writings",{loginToken})
      .then(result => setSlots(result.data))
      .catch(err => console.log(err));
    }
  },[navigate,loginToken])

  return (
    <>
      <EDrive slots={slots}/>
    </>
  );
};

export default EDrivePage;
