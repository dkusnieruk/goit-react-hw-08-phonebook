import { Nav } from 'components/Nav/Nav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'components/hooks';
import css from '../AppBar/AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={css.nav}>
      <Nav />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};
