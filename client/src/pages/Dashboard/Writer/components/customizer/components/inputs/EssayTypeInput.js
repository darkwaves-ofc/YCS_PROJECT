import { useState } from "react";
import classes from "./EssayTypeInput.module.css";
import EssayTypeInputSub from "./EssayTypeInputSub";

const EssayTypeInput = () => {
  const [selectedType, setSelectedType] = useState("general");

  return (
    <div className={classes.essay_type_input}>
      <h3 className={classes.prompt}>&#8865; Type of the essay</h3>
      <div className={classes.essay_type_radios}>
        <div className={classes.radio}>
          <input
            type="radio"
            id="general"
            name="essayType"
            value="general"
            defaultChecked
            onChange={(e) => {
              setSelectedType(e.target.value);
            }}
          />
          <label htmlFor="general" className={classes.radioLable}>
            General
          </label>
        </div>
        <div className={classes.radio}>
          <input
            type="radio"
            id="personalized"
            name="essayType"
            value="personalized"
            onChange={(e) => setSelectedType(e.target.value)}
            required
          />
          <label htmlFor="personalized" className={classes.radioLable}>
            Personalized
          </label>
        </div>
      </div>
      <div className={classes.sub_select}>
        <EssayTypeInputSub type={selectedType}/>
      </div>
    </div>
  );
};

export default EssayTypeInput;
