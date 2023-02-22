import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from '../Nav/nav.module.css';

export const Nav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink className={css.singleNav} to={`/`}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.singleNav} to={'/contacts'}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
