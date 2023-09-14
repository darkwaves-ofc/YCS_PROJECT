import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormSubmitLoader from "../../../../../components/Loaders/FormSubmitLoader";

import classes from "./GmailVerifier.module.css";

const GmailVerifier = () => {
  const [displayLoader, setDisplayLoader] = useState(false);

  const gmail = Cookies.get("verifying_gmail");
  const navigate = useNavigate();

  const [verificationCode, setVerificationCode] = useState("");
  const [displayWarning, setDisplayWarning] = useState(false);

  const handleChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleResend = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = true;

    const sixDigitRegex = /^\d{6}$/;
    if (!sixDigitRegex.test(verificationCode)) {
      setDisplayWarning(true);
      console.log("otp invalid");
      return;
    }
    setDisplayLoader(true);
    axios
      .post("http://localhost:5001/ewriter/verifygmail", {
        gmail,
        verificationCode,
      })
      .then((result) => {
        console.log(result);
        Cookies.remove("verifying_gmail");
        navigate("/login");
      })
      .catch((err) => alert("Sorry! something went wrong."))
      .finally(() => {
        setDisplayLoader(false);
        setTimeout(() => {
          submitBtn.disabled = false;
        }, 1000);
      });
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Verify your gmail address</h1>
      <p className={classes.instruction}>
        A six digit verification code has sent to&nbsp;
        <span className={classes.gmail}>{gmail}</span>,<br />
        enter that code to verify your gmail address
      </p>
      {/* implement the splitted otp input when completed*/}
      <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          maxLength="6"
          value={verificationCode}
          placeholder="code"
          className={classes.otpInput}
          onChange={(e) => handleChange(e)}
        />
        {displayWarning ? (
          <p className={classes.warning}>Invalid verification code</p>
        ) : (
          <p className={classes.noWarning}>valid verification code</p>
        )}
        <button className={classes.verifyButton} id="submitBtn">Verify</button>
        <p className={classes.resendLink} onClick={handleResend}>
          Resend a verification code
        </p>
      </form>
      {displayLoader && <FormSubmitLoader message="Verifying..."/>}
    </div>
  );
};

export default GmailVerifier;
