import "./WordsCountInput.css";

const WordCountInput = () => {
  return (
    <div className="word_count_input">
      <label htmlFor="wordCount" className="count_label">
        ⊡ number of words :{" "}
      </label>
      <select
        id="wordCount"
        name="wordsCount"
        defaultValue={"100"}
        className="count_select"
      >
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="125">125</option>
        <option value="150">150</option>
        <option value="200">200</option>
      </select>
    </div>
  );
};

export default WordCountInput;
