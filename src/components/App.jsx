import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Registration } from 'pages/Registration';
// import { Contacts } from 'components/Contacts/Contacts';
// import ContactList from './ContactList/ContactList';
// import { Filters } from 'components/Filter/Filter';
const Home = lazy (()=> import ('pages/Home'));
const Template = lazy (()=> import ('./Template'));
const Login = lazy (() => import ('pages/Login'));


function App() {
  return (
    <>
      <Suspense fallback = {<div>Is loading ...</div>}>
      <Routes>
        <Route path='/' element={<Template/>}>
          <Route path='/goit-react-hw-08-phonebook/' element={<Home/>}/>
          <Route path='/goit-react-hw-08-phonebook/register' element ={<Registration/>}/>
          <Route path='/goit-react-hw-08-phonebook/login' element={<Login/>}/>
          <Route path='*' element ={<Navigate to='/'/>}/>
        </Route>
      </Routes>
      
      {/* <Contacts />
      <Filters />

      <ContactList /> */}
      </Suspense>
    </>
  );
}

export default App;
