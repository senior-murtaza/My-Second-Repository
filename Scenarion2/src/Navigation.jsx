import { NavLink } from "react-router-dom"
export default function Navigation(){
    return(
        <div>
            <ul>
                <li><NavLink to="contact">Contact</NavLink></li>
                <li><NavLink to="info">Info</NavLink></li>
                <li><NavLink to="/">Home</NavLink></li>
            </ul>
        </div>
    )
}