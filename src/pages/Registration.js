import { useDispatch } from 'react-redux';
import { register } from 'Redux/operations';
import css from '../pages/register.module.css';

export const  Registration=()=> {
    const dispatch = useDispatch();

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name : form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        console.log(register);
        console.log(form);
        form.reset();
    }

    return (<div className={css.registerForm}>
    <h1 className={css.title}>Registration Page</h1>
    <form 
    className={css.form}  
    onSubmit={handleSubmit}
    autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button className={css.button} type="submit">Register</button>
    </form>
    </div>  );
}
