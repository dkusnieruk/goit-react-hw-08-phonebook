import { NavLink } from "react-router-dom";
import { useAuth } from "components/hooks";
import css from '../Nav/nav.module.css'
function Nav() {
    const {isLoggedIn} = useAuth();

    return (
        <nav className={css.nav}>
            <NavLink className={css.singleNav} to={`/goit-react-hw-08-phonebook/`}>
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink className={css.link} to='`/goit-react-hw-08-phonebook/contacts'>
                    Contacts
                </NavLink>
            )}
           
        </nav>
      );
}

export default Nav;