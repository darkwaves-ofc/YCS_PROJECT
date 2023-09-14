import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AuthContext } from "../../../../../../../AuthContext.js";
import { WriterContext } from "../../../WriterContext.js";
import getProfileData from "../../../../../../authentication/features/profile/functions/getProfileData.js";

import classes from "./DetailCollectingForm.module.css";
import TopicInput from "./inputs/TopicInput.js";
import WordCountInput from "./inputs/WordsCountInput.js";
import EssayTypeInput from "./inputs/EssayTypeInput.js";

const DetailCollectingForm = () => {
  const [profileData, setProfileData] = useState({});
  const loginToken = useContext(AuthContext).loginToken.get;
  useEffect(() => {
    getProfileData(loginToken)
      .then((profileData) => {
        setProfileData(profileData);
      })
      .catch(() => {});
  }, [loginToken, setProfileData]);

  const setpendingResult = useContext(WriterContext).pendingResult.set;
  const setResult = useContext(WriterContext).result.set;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const topic = form.topic.value;
    const type = form.essayType.value;
    const count = form.wordsCount.value;
    const reqData = {
      topic,
      type,
      count,
    };
    if (type === "general") reqData.complexity = form.complexity.value;
    else {
      if (profileData) {
        reqData.profileData = profileData;
      } else {
        return;
      }
    }

    console.log(reqData);
    axios
      .post("http://localhost:5003/nonpremium/writeaessay", reqData)
      .then((response) => {
        const result = { topic, body: response.data };
        setResult(result);
        Cookies.set("result", JSON.stringify(result));
      })
      .catch((err) => console.log(err));

    setpendingResult({
      topic,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TopicInput condition={true} />
      <WordCountInput />
      <EssayTypeInput />
      <div className={classes.writeButtonContainer}>
        <button type="submit" className={classes.writeButton}>
          write
        </button>
      </div>
    </form>
  );
};

export default DetailCollectingForm;
