import React from "react";
import classes from "./Hamburger.module.css";

import navBarClasses from "./MiniNavBar.module.css";

const Hamburger = () => {
  const toggleNavBar = () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    hamburger.classList.toggle(classes.hamburgerActive);
    navMenu.classList.toggle(navBarClasses.active);
  };

  //duplicate active design another hamburger if needed;
  return (
    <div className={classes.hamburgerRow}>
      <div id="hamburger" className={classes.hamburger} onClick={toggleNavBar}>
        <span
          className={`${classes.bar} ${classes.horizontal} ${classes.a}`}
        ></span>
        <span
          className={`${classes.bar} ${classes.horizontal} ${classes.b}`}
        ></span>
        <span
          className={`${classes.bar} ${classes.horizontal} ${classes.c}`}
        ></span>
        <span className={`${classes.bar} ${classes.slant} ${classes.d}`}></span>
        <span className={`${classes.bar} ${classes.slant} ${classes.e}`}></span>
      </div>
    </div>
  );
};

export default Hamburger;
