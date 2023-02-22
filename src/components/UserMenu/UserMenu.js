import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/operations';
import { useAuth } from 'hooks';
import { Button } from '@mui/material';
import css from '../UserMenu/UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Button
        variant="outlined"
        color="error"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};
