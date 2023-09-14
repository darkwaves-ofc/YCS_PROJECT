import Feature from "./Feature.js"

import arrowIcon from "./../../../../../assets/arrowIcon.png";
import starIcon from "./../../../../../assets/starIcon.png";
import classes from "./FeaturesBlock.module.css";

const FeaturesBlock = () => {
  return (
    <div className={classes.container}>
      <Feature
        Icon={arrowIcon}
        iconAlt="arrow icon"
        heading={
          <>
            Ace your essays with
            <br />
            <span style={{ color: "#524FD5" }}>Arificial Intelligence</span>
          </>
        }
        description={
          <>
            Every essay is a brandnew
            <br />
            essay written with the help of AI in
            <br /> real time
          </>
        }
      />
      <Feature
        Icon={starIcon}
        iconAlt="star icon"
        heading={
          <>
            Nothing to Worry about
            <br />
            <span style={{ color: "#524FD5" }}>grammer</span> mistakes
          </>
        }
        description={
          <>
            99.9% guarantee about
            <br />
            grammer and spelling of
            <br />
            your essays
          </>
        }
      />
    </div>
  );
};

export default FeaturesBlock;
