import { Link } from "react-router-dom";
// import Header from "./components/Header/Header";
import "./Home.css";
import Header from "./components/header/Header";

const Home = () => {
  return (
    <div className="Home">
      <Header/>
      <div className="body">
        <div className="description">
          <p>
            power up your writings with
            <br />
            <span className="purpleText">cutting edge technolgies</span>
          </p>
          <img src="./resources/laptopMan1.png" alt="smart guy" />
        </div>

        <div className="writers_links">
          <h2 className="links_heading">Our writers</h2>
          <div className="writer_link">
            <div className="link_description">
              <h3>Essay writer</h3>
              <p>
                write amazing essays <br />
                with the help of AI
              </p>
              <Link to="/essaywriter">
                <button className="linkButton">Let's go</button>
              </Link>
            </div>
            <div className="link_img">
              <img src="./resources/excitedGirl1.png" alt="smart girl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
