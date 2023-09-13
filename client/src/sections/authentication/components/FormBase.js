import React from "react";

import classes from "./FormBase.module.css";


const FormBase = (props) => {
    return (
        <div className={classes.base}>
            {props.children}
        </div>
    )
}

export default FormBase;