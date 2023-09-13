import classes from "./Backdrop.module.css"

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} >
            {props.children}
        </div>
    )
}

export default Backdrop;
//do not wrok with content need to be scrolled since position fixed