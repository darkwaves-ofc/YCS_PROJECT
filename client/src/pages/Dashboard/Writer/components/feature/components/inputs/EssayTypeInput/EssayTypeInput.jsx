import { useState } from "react";
import "./EssayTypeInput.css";
import EssayTypeInputSub from "../EssayTypeInputSub/EssayTypeInputSub";

const EssayTypeInput = () => {
  const [selectedType, setSelectedType] = useState("general");

  return (
    <div className="essay_type_input">
      <h3 className="prompt">&#8865; Type of the essay</h3>
      <div className="essay_type_radios">
        <div className="radio">
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
          <label htmlFor="general" className="radioLable">
            General
          </label>
        </div>
        <div className="radio">
          <input
            type="radio"
            id="personalized"
            name="essayType"
            value="personalized"
            onChange={(e) => setSelectedType(e.target.value)}
            required
          />
          <label htmlFor="personalized" className="radioLable">
            Personalized
          </label>
        </div>
      </div>
      <div className="sub_select">
        <EssayTypeInputSub type={selectedType} />
      </div>
    </div>
  );
};

export default EssayTypeInput;
