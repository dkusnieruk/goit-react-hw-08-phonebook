import css from '../pages/home.module.css';

function Home() {
  return (
    <div className={css.home}>
      <h1>PhoneBook Home Page </h1>
      <img
        className={css.image}
        src="https://res.cloudinary.com/dlrt3aofq/image/upload/v1677061663/4248396588_baf974a894_o.0.0_wzotzo.jpg"
        alt="phonebook"
      />
    </div>
  );
}

export default Home;
