import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Select from "react-select";
import axios from "axios";

import "./ProfileCreator.css";
import { AuthContext } from "../../../../../context/AuthContext";

import {
  getCountriesOptions,
  occupationOptions,
  genderOptions,
} from "../../functions/optionLists";
import FormSubmitLoader from "../../../../../components/Loader/FormSubmitLoader/FormSubmitLoader";

const ProfileCreator = () => {
  const [displayLoader, setDisplayLoader] = useState(false);
  const navigate = useNavigate();

  const loginToken = useContext(AuthContext).loginToken.get;
  const setProfileCreated = useContext(AuthContext).profileCreated.set;

  const [slideNo, setSlideNo] = useState(0);
  const [age, setAge] = useState("");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [occupation, setOccupation] = useState("");

  const [countriesOptions, setCountriesOptions] = useState([]);

  useEffect(() => {
    getCountriesOptions().then((options) => setCountriesOptions(options));
  }, []);

  const SlidesNavBar = (props) => {
    const handleGoBack = () => {
      setSlideNo((current) => (current > 0 ? current - 1 : current));
    };
    const handleGoForward = () => {
      if (props.current) {
        setSlideNo((current) => (current < 6 ? current + 1 : current));
        document.getElementById("warning").classList.remove("active");
      } else {
        document.getElementById("warning").classList.add("active");
      }
      console.log(slideNo);
    };

    const saveProfileInfo = () => {
      const submitBtn = document.getElementById("submitBtn");
      submitBtn.disabled = true;
      setDisplayLoader(true);
      const profileData = {
        fullName,
        age,
        gender,
        country,
        occupation,
      };

      axios
        .post("http://localhost:5002/ewriter/createprofile", {
          loginToken,
          profileData,
        })
        .then(() => {
          //only status 200 responses. only one at this scenario
          setProfileCreated(true);
          navigate("/profile");
        })
        .catch((err) => {
          if (err.response.data === "already_created") {
            alert(
              "you have Already created a profile,if you want, you can edit your profile details"
            );
            navigate("/profile");
          } else {
            alert("something went wrong, please try again later.");
            navigate("/");
          }
        })
        .finally(() => {
          setDisplayLoader(false);
          setTimeout(() => {
            submitBtn.disabled = false;
          }, 1000);
        });
    };

    return (
      <div className="nav_btns">
        {/*close btn added.but not aware of possible concerns*/}
        {slideNo === 0 ? (
          <button className="btn cancel_btn" onClick={() => navigate("/")}>
            Cancel
          </button>
        ) : (
          <button className="btn navBtn" onClick={handleGoBack}>
            Previous
          </button>
        )}
        {slideNo === 6 ? (
          <button
            className="btn saveBtn"
            id="submitBtn"
            onClick={saveProfileInfo}
          >
            Save
          </button>
        ) : (
          <button className="btn navBtn" onClick={handleGoForward}>
            Next
          </button>
        )}
      </div>
    );
  };

  const Introduction = () => {
    return (
      <>
        <div className="introBlock">
          <h3 className="h3">
            We are using using these informations to write essays that are{" "}
            <span className="purpleTxt">
              perfectly matching with your requirements
            </span>
            .
          </h3>
          <p className="introPara">
            You can update your profile informations at anytime
          </p>
          <p className="warning" id="warning">
            {" "}
          </p>
        </div>
        <SlidesNavBar current={true} />
      </>
    );
  };

  const FullNameInput = () => {
    return (
      <>
        <div className="inputBlock">
          <label className="inputLabel">Full Name: </label>
          <input
            type="text"
            name="fullName"
            defaultValue={fullName}
            className="txtInput"
            onBlur={(e) => setFullName(e.target.value)}
          />
          <p className="warning" id="warning">
            Please Enter your full name
          </p>
        </div>
        <SlidesNavBar current={fullName} />
      </>
    );
  };
  const AgeInput = () => {
    return (
      <>
        <div className="inputBlock">
          <label className="inputLabel">Age: </label>
          <input
            type="text"
            name="age"
            maxLength="2"
            defaultValue={age}
            className="txtInput"
            onBlur={(e) => setAge(e.target.value)}
          />
          <p className="warning" id="warning">
            Please Enter your age
          </p>
        </div>
        <SlidesNavBar current={age} />
      </>
    );
  };

  const GenderSelection = () => {
    return (
      <>
        <div className="inputBlock">
          <label className="inputLabel">Gender: </label>
          <Select
            options={genderOptions}
            defaultValue={{ value: gender, label: gender }}
            menuPlacement="bottom"
            onChange={(choice) => setGender(choice.value)}
          />
          <p className="warning" id="warning">
            Please select your gender
          </p>
        </div>
        <SlidesNavBar current={gender} />
      </>
    );
  };

  const CountrySelection = () => {
    return (
      <>
        <div className="inputBlock">
          <label className="inputLabel">Country : </label>
          <Select
            options={countriesOptions}
            defaultValue={{ value: country, label: country }}
            menuPlacement="bottom"
            onChange={(choice) => setCountry(choice.value)}
          />
          <p className="warning" id="warning">
            Please select your country
          </p>
        </div>
        <SlidesNavBar current={country} />
      </>
    );
  };

  const OccupationSelection = () => {
    return (
      <>
        <div className="inputBlock">
          <label className="inputLabel">Occupation : </label>
          <Select
            options={occupationOptions}
            defaultValue={{ value: occupation, label: occupation }}
            menuPlacement="bottom"
            onChange={(choice) => {
              console.log(occupation);
              setOccupation(choice.value);
            }}
          />
          <p className="warning" id="warning">
            Please select your occupation
          </p>
        </div>
        <SlidesNavBar current={occupation} />
      </>
    );
  };

  const Preview = () => {
    return (
      <>
        <div className="previewBlock">
          <h3 className="h3">Profile preview</h3>
          <ul className="previewList">
            <li>Full name: {fullName}</li>
            <li>Age: {age}</li>
            <li>Gender: {gender}</li>
            <li>Country: {country}</li>
            <li>Occupation: {occupation}</li>
          </ul>
        </div>
        <SlidesNavBar current={true} />
        {displayLoader && <FormSubmitLoader />}
      </>
    );
  };

  return (
    <div className="creator">
      <div className="heading">
        <img
          src="/resources/eWriterLogo1Black.png"
          alt="accountIcon"
          className="profileIcon"
        />
        <h2 className="topic">Create your profile</h2>
      </div>
      {slideNo === 0 && <Introduction />}
      {slideNo === 1 && <FullNameInput />}
      {slideNo === 2 && <AgeInput />}
      {slideNo === 3 && <GenderSelection />}
      {slideNo === 4 && <CountrySelection />}
      {slideNo === 5 && <OccupationSelection />}
      {slideNo === 6 && <Preview />}
      <div className="disclaimer">
        <p>
          disclaimer : profile informations my sent to AI models when generating
          personalized writings,read privacy policy for more details.
        </p>
      </div>
    </div>
  );
};
export default ProfileCreator;
