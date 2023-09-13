import React from "react";
import classes from "./Feature.module.css";


const Feature = (props) => {
    return (
    <div className={classes.featureContainer}>
        <div className={classes.iconContainer}>
            <img src={props.Icon} alt={props.iconAlt} className={classes.icon}/>
        </div>
        <h3 className={classes.h3}>{props.heading}</h3>
        <p className={classes.p}>{props.description}</p>
    </div>
    )
}

export default Feature;