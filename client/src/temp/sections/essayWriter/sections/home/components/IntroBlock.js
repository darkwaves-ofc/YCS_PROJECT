import { Link } from "react-router-dom";
import EssayWriterHeading from "../../../components/Headers/EssayWriterHeading";

import classes from "./IntroBlock.module.css";

const IntroBlock = () => {
  return (
    <div className={classes.IntroBlock}>
      <EssayWriterHeading />
      <div className={classes.content}>
        <img
          className={classes.contentImg}
          src="/resources/smilingGirl1WB.png"
          alt="smart girl"
        />
        <h2 className={classes.intro}>
          Beautiful and creative
          <span style={{ color: " #524FD5" }}> essays</span>
          <br />
          on <span style={{ color: " #524FD5" }}>any topic</span>
        </h2>
        <p className={classes.description}>
          The best essay writer
          <br />
          powered by AI
        </p>
        <Link to="/essaywriter/writer">
          <button className={classes.button}> Let 's go</button>
        </Link>
      </div>
    </div>
  );
};

//remove logo if not using
export default IntroBlock;
