import { NavLink } from 'react-router-dom';
import css from '../AuthNav/AuthNav.module.css';
export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.singleNav} to={`/register`}>
        Register
      </NavLink>
      <NavLink className={css.singleNav} to={`/login`}>
        Log In
      </NavLink>
    </div>
  );
};
