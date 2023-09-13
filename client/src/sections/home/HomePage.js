import { Link } from "react-router-dom";
import Header from "../../components/Headers/Header.js";

import classes from "./HomePage.Module.css"

const HomePage = () => {
  return (
    <div className={classes.body}>
      <Header />
      <div className={classes.description}>
        <p>
          power up your writings with
          <br />
          <span className={classes.purpleText}>cutting edge technolgies</span>
        </p>
        <img src="./resources/laptopMan1.png" alt="smart guy" />
      </div>

      <div className={classes.writers_links}>
        <h2 className={classes.links_heading}>Our writers</h2>
        <div className={classes.writer_link}>
          <div className={classes.link_description}>
            <h3>Essay writer</h3>
            <p>
              write amaizing essays <br />
              with the help of AI
            </p>
            <Link to="/essaywriter">
              <button className={classes.linkButton}>Let's go</button>
            </Link>
          </div>
          <div className={classes.link_img}>
            <img src="./resources/excitedGirl1.png" alt="smart girl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
