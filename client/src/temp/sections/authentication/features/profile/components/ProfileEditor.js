import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

import {
  genderOptions,
  getCountriesOptions,
  occupationOptions,
} from "../functions/optionLists";
import FormSubmitLoader from "../../../../../components/Loaders/FormSubmitLoader";
import classes from "./ProfileEditor.module.css";

const ProfileEditor = (props) => {
  const [displayLoader, setDisplayLoader] = useState(false);

  const navigate = useNavigate();

  const loginToken = props.loginToken;
  const profileData = props.profileData;

  const currentFullName = profileData.fullName;
  const currentAge = profileData.age;
  const currentGender = profileData.gender;
  const currentCountry = profileData.country;
  const currentOccupation = profileData.occupation;

  const newFullNameRef = useRef();
  const newAgeRef = useRef();
  const [selectedGender, setSelectedGender] = useState(currentGender);
  const [selectedCountry, setSelectedCountry] = useState(currentCountry);
  const [selectedOccupation, setSelectedOccupation] =
    useState(currentOccupation);

  const [countriesOptions, setCountriesOptions] = useState([]);

  useEffect(() => {
    getCountriesOptions()
      .then((options) => setCountriesOptions(options))
      .catch((err) => setCountriesOptions([]));
  }, []);

  const setRenderingComponent = props.setter;
  const displayDisplayer = (e) => {
    e.preventDefault();
    setRenderingComponent("displayer");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = true;
    setDisplayLoader(true);

    const newUpdates = {};

    const newFullName = newFullNameRef.current.value;
    const newAge = newAgeRef.current.value;

    if (newFullName !== currentFullName) newUpdates.fullName = newFullName;
    if (newAge !== currentAge) newUpdates.age = newAge;
    if (selectedGender !== currentGender) newUpdates.gender = selectedGender;
    if (selectedCountry !== currentCountry)
      newUpdates.country = selectedCountry;
    if (selectedOccupation !== currentOccupation)
      newUpdates.occupation = selectedOccupation;
    console.log(newUpdates);

    if (Object.entries(newUpdates).length === 0)
      navigate("/redirect", { state: "/profile" });
    else {
      axios
        .post("http://localhost:5002/ewriter/updateprofile", {
          newUpdates,
          loginToken,
        })
        .finally(() => navigate("/redirect", { state: "/profile" }));
    }
  };

  return (
    <div className={classes.editor}>
      <img
        src={props.profileIcon}
        alt="profile icon"
        className={classes.profileIcon}
      />
      <h1 className={classes.topic}>{profileData.username}</h1>
      <h2 className={classes.h2}>Edit profile details</h2>
      <form className={classes.editorForm} onSubmit={(e) => handleSubmit(e)}>
        <div className={classes.inputBlock}>
          <label className={classes.inputLabel}>Full Name: </label>
          <input
            type="text"
            defaultValue={currentFullName}
            placeholder={currentFullName}
            id=""
            name=""
            required
            ref={newFullNameRef}
            className={classes.txtInput}
          />
        </div>
        <div className={classes.inputBlock}>
          <label className={classes.inputLabel}>Age: </label>
          <input
            type="text"
            defaultValue={currentAge}
            placeholder={currentAge}
            id=""
            name=""
            required
            ref={newAgeRef}
            className={classes.txtInput}
          />
        </div>
        <div className={classes.inputBlock}>
          <label className={classes.inputLabel}>Gender: </label>
          <Select
            options={genderOptions}
            defaultValue={{ value: currentGender, label: currentGender }}
            menuPlacement="bottom"
            onChange={(choice) => setSelectedGender(choice.value)}
          />
        </div>
        <div className={classes.inputBlock}>
          <label className={classes.inputLabel}>Country: </label>
          <Select
            options={countriesOptions}
            defaultValue={{ value: currentCountry, label: currentCountry }}
            menuPlacement="bottom"
            onChange={(choice) => setSelectedCountry(choice.value)}
          />
        </div>
        <div className={classes.inputBlock}>
          <label className={classes.inputLabel}>Occupation:</label>
          <Select
            options={occupationOptions}
            defaultValue={{
              value: currentOccupation,
              label: currentOccupation,
            }}
            menuPlacement="bottom"
            onChange={(choice) => setSelectedOccupation(choice.value)}
          />
        </div>
        <div className={classes.actionBtns}>
          <button
            className={classes.cancelBtn}
            onClick={(e) => displayDisplayer(e)}
          >
            Cancel
          </button>
          <input
            type="submit"
            id="submitBtn"
            name="submit"
            value="save"
            className={classes.saveBtn}
          />
        </div>
      </form>
      {displayLoader && <FormSubmitLoader message={"Loading..."} />}
    </div>
  );
};
export default ProfileEditor;

//display a advice to give true details becouse essays are personalized
