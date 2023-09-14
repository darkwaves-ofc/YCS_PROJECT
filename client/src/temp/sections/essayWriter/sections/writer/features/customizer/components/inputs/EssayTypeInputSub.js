import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../../../../AuthContext";

import ComplexityInput from "./ComplexityInput";

import classes from "./EssayTypeInputSub.module.css";
const EssayTypeInputSub = (props) => {
  const type = props.type;
  const profileCreated = useContext(AuthContext).profileCreated.get;
  if (type === "personalized") {
    if (!profileCreated) {
      return (
        <p className={classes.advice_para}>
          you haven't created a profile yet. please{" "}
          <Link to="/create_profile">
            <span className="underline">create a profile</span>
          </Link>{" "}
          to use this service
        </p>
      );
    } else {
      return (
        <p className={classes.advice_para}>
          Your essay will be personalized according to your{" "}
          <Link to="/profile">
            <span className="underline">profile details</span>
          </Link>
        </p>
      );
    }
  } else {
    return <ComplexityInput />;
  }
};

export default EssayTypeInputSub;
