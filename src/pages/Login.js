import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { logIn } from 'Redux/operations';
import css from '../pages/login.module.css';

function Login() {
  const dispatch = useDispatch();
  const emailInput = useRef();
  const passwordInput = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    const emailText = emailInput.current.value;
    const passwordText = passwordInput.current.value;

    dispatch(
      logIn({
        email: emailText,
        password: passwordText,
      })
    );
    emailInput.current.value = '';
    passwordInput.current.value = '';
  };

  return (
    <div className={css.loginForm}>
      <h1 className={css.title}>Login Page</h1>
      <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <input ref={emailInput} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <input ref={passwordInput} type="password" name="password" />
        </label>
        <button className={css.button} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
