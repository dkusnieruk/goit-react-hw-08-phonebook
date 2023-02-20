import { NavLink } from "react-router-dom";
import css from '../Nav/nav.module.css'
function Nav() {
    return (
        <nav className={css.nav}>
            <NavLink className={css.singleNav} to={`/goit-react-hw-08-phonebook/`}>Home</NavLink>
            <div>
                <NavLink className={css.singleNav} to={`/goit-react-hw-08-phonebook/register`}>Register</NavLink>
                <NavLink className={css.singleNav} to={`/goit-react-hw-08-phonebook/login`}>Log In</NavLink>
            </div>
        </nav>
      );
}

export default Nav;