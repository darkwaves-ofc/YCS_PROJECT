import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const RedirectPage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        navigate(location.state);
    })


    return (<p>redirecting</p>)
}

export default RedirectPage