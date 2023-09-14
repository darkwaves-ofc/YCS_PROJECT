import { Link } from "react-router-dom";
import classes from "./EssayWriterHeading.module.css";

const EssayWriterHeading = () => {
  return (
    <div className={classes.heading}>
      <div>
        <Link to="/essaywriter">
          <img
            src="/resources/essayWriterLogo1.png"
            alt="logo"
            className={classes.logo}
          />
        </Link>
      </div>
      <h1 className={classes.productName}> Essay writer </h1>
      <p className={classes.companyName}> by&nbsp;eWriter </p>
    </div>
  );
};
export default EssayWriterHeading;
