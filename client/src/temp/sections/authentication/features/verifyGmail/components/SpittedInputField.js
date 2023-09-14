import { useState } from "react";

import classes from "./SplittedInputField.module.css";

const SplittedUInputField = (props) => {
  const length = props.length;
  const [otp, setOtp] = useState(new Array(length).fill(""));

  console.log(otp);
  const handleChange = (e, index) => {
    setOtp((prevOtp) => {
      const newOtp = prevOtp;
      newOtp[index] = e.target.value;
      return newOtp;
    });
    if (e.target.value && index < otp.length - 1 && !otp[index + 1]) {
      const nextInput = document.getElementById(`input${index + 1}`);
      nextInput.focus();
    }
    console.log(otp);
    console.log(e.target.defaultValue);
  };

  return (
    <div className={classes.input_container}>
      {otp.map((value, index) => (
        <input
          key={index}
          id={`input${index}`}
          type="text"
          defaultValue={value}
          maxLength={1}
          onChange={(e) => handleChange(e, index)}
          className={classes.digitInput}
        />
      ))}
    </div>
  );
};

export default SplittedUInputField;
