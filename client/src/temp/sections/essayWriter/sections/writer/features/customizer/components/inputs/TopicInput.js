import classes from "./TopicInput.module.css";

const TopicInput = (props) => {

    return (
        <div className={classes.topic}>
        <h3 className={classes.prompt}>&#8865; Enter your topic</h3>
        <input
          type="text"
          id="topic"
          name="topic"
          maxLength="30"
          placeholder="Your Topic..."
          className={classes.topicInput}
          required
        />
        {props.condition && (
          <p className={classes.condition}>
            Topic should contain less than 30 letters,increase the limit by getting a
            premium subscription.{"(premium subscription is comming soon...)"}
          </p>
        )}
      </div>
    )
}
export default TopicInput;