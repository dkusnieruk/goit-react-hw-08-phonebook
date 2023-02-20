import Nav from "./Nav/Nav";
import { Outlet } from "react-router-dom";
import css from '../components/main.module.css'

const Template = () =>{
    return (
        <>
        <header>
            <Nav/>
        </header>
        <main className={css.main}>
        <Outlet/>
        </main>
        <footer>
            <p>PhoneBook Login App</p>
        </footer>
        </>
    )
}

export default Template;