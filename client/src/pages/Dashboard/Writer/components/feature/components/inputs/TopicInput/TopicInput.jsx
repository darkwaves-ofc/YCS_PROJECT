import "./TopicInput.css";

const TopicInput = (props) => {
  return (
    <div className="topic">
      <h3 className="prompt">&#8865; Enter your topic</h3>
      <input
        type="text"
        id="topic"
        name="topic"
        maxLength="30"
        placeholder="Your Topic..."
        className="topicInput"
        required
      />
      {props.condition && (
        <p className="condition">
          Topic should contain less than 30 letters, increase the limit by
          getting a premium subscription.
          {"(premium subscription is coming soon...)"}
        </p>
      )}
    </div>
  );
};
export default TopicInput;
