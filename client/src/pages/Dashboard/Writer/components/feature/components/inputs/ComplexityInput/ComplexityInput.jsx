import "./ComplexityInput.css";

const ComplexityInput = () => {
  return (
    <div className="complexity_input">
      <label htmlFor="wordCount" className="complexity_label">
        &#8865; Complexity :{" "}
      </label>
      <select
        id="complexity"
        name="complexity"
        defaultValue={"intermediate"}
        className="complexity_select"
      >
        <option value="simple">simple</option>
        <option value="intermediate">intermediate</option>
        <option value="advanced">advanced</option>
      </select>
    </div>
  );
};

export default ComplexityInput;
