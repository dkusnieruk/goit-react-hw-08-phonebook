import css from '../pages/login.module.css'

function Login() {
    return (<div className={css.loginForm}>
    <h1 className={css.title}>Login Page</h1>
    <form className={css.form} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button className={css.button} type="submit">Log In</button>
    </form>
 
    </div>  );
}

export default Login