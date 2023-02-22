import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { Button } from '@mui/material';
import { register } from 'Redux/operations';
import css from '../pages/register.module.css';

const Registration = () => {
  const dispatch = useDispatch();
  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();
    const nameText = inputName.current.value;
    const emailText = inputEmail.current.value;
    const passwordText = inputPassword.current.value;

    dispatch(
      register({
        name: nameText,
        email: emailText,
        password: passwordText,
      })
    );
    inputName.current.value = '';
    inputEmail.current.value = '';
    inputPassword.current.value = '';
  };

  return (
    <div className={css.registerForm}>
      <h1 className={css.title}>Registration Page</h1>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Username
          <input type="text" name="name" ref={inputName} />
        </label>
        <label className={css.label}>
          Email
          <input type="email" name="email" ref={inputEmail} />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" ref={inputPassword} />
        </label>
        <div className={css.button}>
        <Button
          variant="contained"
          color="success"
          type="submit"
        >
          Register
        </Button>
        </div>
      </form>
    </div>
  );
};
export default Registration;
