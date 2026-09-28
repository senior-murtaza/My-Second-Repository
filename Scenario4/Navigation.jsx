import { NavLink } from "react-router-dom"

export default function Navigation(){
    return(
        <div className="navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="sign">Sign</NavLink>
        </div>
    )
}