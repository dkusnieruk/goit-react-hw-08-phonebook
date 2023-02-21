import { NavLink } from "react-router-dom";
import css from '../AuthNav/AuthNav.module.css';
export const AuthNav = () =>{
    return(
        <div>
        <NavLink className={css.singleNav} to={`/goit-react-hw-08-phonebook/register`}>Register</NavLink>
        <NavLink className={css.singleNav} to={`/goit-react-hw-08-phonebook/login`}>Log In</NavLink>
     </div>
    )
}