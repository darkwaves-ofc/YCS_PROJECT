import classes from "./ComplexityInput.module.css";

const ComplexityInput = () => {
  return (
    <div className={classes.complexity_input}>
      <label htmlFor="wordCount" className={classes.complexity_label}>
        &#8865; Complexity :{" "}
      </label>
      <select
        id="complexity"
        name="complexity"
        defaultValue={"intermediate"}
        className={classes.complexity_select}
      >
        <option value="simple">simple</option>
        <option value="intermediate">intermediate</option>
        <option value="advanced">advanced</option>
      </select>
    </div>
  );
};

export default ComplexityInput;
