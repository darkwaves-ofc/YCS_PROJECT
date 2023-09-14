import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import FormBase from "../../../components/FormBase.js";

import classes from "./LoginForm.module.css";
import { AuthContext } from "../../../../../AuthContext.js";
import FormSubmitLoader from "../../../../../components/Loaders/FormSubmitLoader.js";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [displayLoader, setDisplayLoader] = useState(false);
  const [incorrectWarning, setIncorrectWarning] = useState(false);
  
  const setLoginToken = useContext(AuthContext).loginToken.set;
  const setProfileCreated = useContext(AuthContext).profileCreated.set;
  const identifierRef = useRef();
  const pwdRef = useRef();
  
  const [validIdentifier, setValidIdentifier] = useState(undefined);
  const [validPwd, setValidPwd] = useState(undefined);
  
  const usernameRegex = /^(?=.*\d)(?=.*[a-z])[a-zA-Z\d]{6,20}$/;
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|googlemail)\.com$/i;
  

  const handleIdentifier = () => {
    if (
      usernameRegex.test(identifierRef.current.value) ||
      gmailRegex.test(identifierRef.current.value)
    ) {
      setValidIdentifier(true);
      console.log("identifier valid");
    } else {
      setValidIdentifier(false);
      console.log("identifier invalid");
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = true;

    handleIdentifier();
    handlePwd();

    if (!(validIdentifier && validPwd)) {
      submitBtn.disabled = false;
      return;
    }
    setDisplayLoader(true);

    const identifier = identifierRef.current.value;
    const password = pwdRef.current.value;

    const user = {
      identifier,
      password,
    };

    axios
      .post("http://localhost:5001/ewriter/login", user)
      .then((response) => {
        console.log(response);
        if (response.data.username) {
          console.log("logged in");
          const token = response.data.token;
          const expires = new Date(Date.now() + 1 * 60 * 60 * 1000);
          Cookies.set("ewriter_login_token", token, { expires });
          setLoginToken(token);
          if (response.data.profileCreated !== "y") {
            navigate("/create_profile");
            return;
          } else {
            Cookies.set("profile_created", "T", { expires });
            setProfileCreated(true);
          }
          navigate("/");
          return;
        } else if (response.data.gmail) {
          const expires = new Date(Date.now() + 10 * 60 * 1000);
          Cookies.set("verifying_gmail", response.data.gmail, { expires });
          console.log("gmail saved");
          navigate("/verifygmail");
        } else {
          alert(`something went wrong please try again,
          contact developers through ewriterinfo@gmail.com if needed`);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          // only receive wrong_username_pwd
          setIncorrectWarning(true);
        } else
          alert(`Sorry something went wrong please try again,
        contact developers through ewriterinfo@gmail.com if needed`);
      })
      .finally(() => {
        setDisplayLoader(false);
        setTimeout(() => {
          submitBtn.disabled = false;
        }, 1000);
      });
  };

  return (
    <FormBase>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1 className={classes.topic}>Login</h1>
        <div
          className={`${classes.inputBlock} ${
            validIdentifier
              ? classes.validIdentifier
              : classes.inValidIdentifier
          }`}
        >
          <label htmlFor="Identifire" className={`${classes.inputLable}`}>
            Username or Gmail :
          </label>
          <input
            type="text"
            id="Identifire"
            name="Identifire"
            ref={identifierRef}
            onBlur={handleIdentifier}
            className={`${classes.identifierInput} ${classes.txtInput}`}
          />
          {validIdentifier === false && (
            <p className={classes.identifierWarning}>
              username or gmail invalid !
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
            Password :
          </label>
          <input
            type="password"
            id="pwd"
            name="pwd"
            autoComplete="off"
            ref={pwdRef}
            onBlur={handlePwd}
            className={`${classes.pwdInput} ${classes.txtInput}`}
          />
          {validPwd === false && (
            <p className={classes.pwdWarning}>password invalid !</p>
          )}
          {incorrectWarning && (
            <p className={classes.incorrectWarning}>
              Incorrect username or password
            </p>
          )}
        </div>
        <div className={classes.submitRow}>
          <input
            type="submit"
            id="submitBtn"
            value="Login"
            className={classes.submitBtn}
          />
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
        {displayLoader && <FormSubmitLoader message={"Loading..."}/>}
      </form>
    </FormBase>
  );
};

export default RegisterForm;
