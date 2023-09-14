import axios from "axios";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import FormBase from "../../../components/FormBase.js";
import FormSubmitLoader from "../../../../../components/Loaders/FormSubmitLoader.js";

import classes from "./RegisterForm.module.css";

const RegisterForm = () => {

  const [displayLoader, setDisplayLoader] = useState(false);

  const uNameRef = useRef();
  const gmailRef = useRef();
  const pwdRef = useRef();
  const confirmPwdRef = useRef();

  const [validUname, setValidUname] = useState(undefined);
  const [validgmail, setValidgmail] = useState(undefined);
  const [validPwd, setValidPwd] = useState(undefined);
  const [pwdConfirmed, setPwdConfirmed] = useState(undefined);

  const navigate = useNavigate();

  const handleUsername = () => {
    const usernameRegex = /^(?=.*\d)(?=.*[a-z])[a-zA-Z\d]{6,20}$/;

    if (usernameRegex.test(uNameRef.current.value)) {
      setValidUname(true);
      console.log("uname valid");
    } else {
      setValidUname(false);
      console.log("username invalid");
    }
  };

  const handlegmail = () => {

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|googlemail)\.com$/i;
    //const emailRegex =
      ///^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (gmailRegex.test(gmailRef.current.value)) {
      setValidgmail(true);
      console.log("gmail valid");
    } else {
      setValidgmail(false);
      console.log("gmail invalid");
    }
  };

  const handlePwd = () => {
    const pwdRegex = /^(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,25}$/;

    if (pwdRegex.test(pwdRef.current.value)) {
      setValidPwd(true);
      console.log("password valid");
    } else {
      setValidPwd(false);
      console.log("password invalid");
    }
    if (pwdConfirmed === undefined) {
      console.log("havent done confirmission yet");
      return;
    }
    handleConfirmPwd();
  };

  console.log(validPwd);

  const handleConfirmPwd = () => {
    if (validPwd && pwdRef.current.value === confirmPwdRef.current.value) {
      console.log("pwd confiremed");
      setPwdConfirmed(true);
    } else {
      console.log("pwd don't match");
      setPwdConfirmed(false);
    }
  };

  const handleSubmit = (e) => {
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = true;
    e.preventDefault();

    handleUsername();
    handlegmail();
    handlePwd();
    handleConfirmPwd();

    if(!(validUname && validPwd && validgmail && pwdConfirmed)) {
      submitBtn.disabled = false;
      return;
    }
    setDisplayLoader(true);

    const gmail= gmailRef.current.value;
    const username= uNameRef.current.value;
    const password= pwdRef.current.value;

    const user = {
      gmail,
      username,
      password,
    };

    axios
      .post("http://localhost:5001/ewriter/register", user)
      .then((result) => {
        if (result.data.gmail) {
          const expires = new Date(Date.now() + 10 * 60 * 1000);
          Cookies.set("verifying_gmail",result.data.gmail,{expires});
          console.log("gmail saved");
          navigate("/verifygmail");
        } else {
          alert(`Sorry something went wrong please try again,
          contact developers through ewriterinfo@gmail.com if needed`);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(`Sorry something went wrong please try again,
        contact developers through ewriterinfo@gmail.com if needed`);
      })
      .finally(() => {
        setDisplayLoader(false);
        setTimeout(() => {
          submitBtn.disabled = false;
        }, 1000);
      })
  };

  return (
    <FormBase>
      {/* <div className={classes.loadingAnimation}></div>  skipped*/}
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1 className={classes.topic}>Register</h1>
        <div
          className={`${classes.inputBlock} ${
            validUname ? classes.validUname : classes.inValidUname
          }`}
        >
          <label
            htmlFor="username"
            className={`${classes.txtInputLable} ${classes.inputLable}`}
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            ref={uNameRef}
            onBlur={handleUsername}
            className={`${classes.uNameInput} ${classes.txtInput}`}
          />
          {validUname === false && (
            <p className={classes.uNameWarning}>
              Please enter a valid username which contains 6-20 characters
              including at least a letter and a number
            </p>
          )}
        </div>
        <div
          className={`${classes.inputBlock} ${classes.gmailInputBlock} ${
            validgmail ? classes.validgmail : classes.inValidgmail
          }`}
        >
          <label
            htmlFor="gmail"
            className={`${classes.gmailInputLable} ${classes.inputLable}`}
          >
            Gmail:
          </label>
          <input
            type="email"
            id="gmail"
            name="gmail"
            required
            ref={gmailRef}
            onBlur={handlegmail}
            className={`${classes.gmailInput} ${classes.txtInput}`}
          />
          {validgmail === false && (
            <p className={classes.gmailWarning}>
              Please enter a valid gmail address
            </p>
          )}
        </div>
        <div
          className={`${classes.inputBlock} ${
            validPwd ? classes.validPwd : classes.inValidPwd
          }`}
        >
          <label
            htmlFor="pwd"
            className={`${classes.pwdInputLable} ${classes.inputLable}`}
          >
            Password:
          </label>
          <input
            type="password"
            id="pwd"
            name="pwd"
            required
            autoComplete="off"
            ref={pwdRef}
            onBlur={handlePwd}
            className={`${classes.pwdInput} ${classes.txtInput}`}
          />
          {validPwd === false && (
            <p className={classes.pwdWarning}>
              Please enter a valid password which contains 6-25 characters
              including at least a letter and a number
            </p>
          )}
        </div>
        <div
          className={`${classes.inputBlock} ${
            pwdConfirmed ? classes.pwdConfirmed : classes.pwdNotConfirmed
          }`}
        >
          <label
            htmlFor="confirmPwd"
            className={`${classes.confirmPwdLable} ${classes.inputLable}`}
          >
            confirm Password:
          </label>
          <input
            type="password"
            id="confirmPwd"
            name="confirmPwd"
            required
            autoComplete="off"
            ref={confirmPwdRef}
            onBlur={handleConfirmPwd}
            className={`${classes.confirmPwdInput} ${classes.txtInput}`}
          />
          {pwdConfirmed === false && (
            <p className={classes.confirmPwdWarning}>Passwords do not match!</p>
          )}
        </div>
        <div className={classes.submitRow}>
          <input type="submit" id="submitBtn" value="Register" className={classes.submitBtn} />
          <p>
            Alredy have a account? <Link to="/login">login</Link>
          </p>
        </div>
      </form>
        {displayLoader && <FormSubmitLoader message={"Loading..."}/>}
    </FormBase>
  );
};

export default RegisterForm;
