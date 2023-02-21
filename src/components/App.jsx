import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'Redux/operations';
import { useAuth } from './hooks';

const Home = lazy(() => import('pages/Home'));
const Template = lazy(() => import('./Template'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('components/Contacts/Contacts'));
const Registration = lazy(() => import(`pages/Registration`));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Is refreshing</p>
  ) : (
    <>
      <Suspense fallback={<div>Is loading ...</div>}>
        <Routes>
          <Route path="/" element={<Template />}>
            <Route path="/goit-react-hw-08-phonebook/" element={<Home />} />
            <Route
              path="/goit-react-hw-08-phonebook/register"
              element={
                <RestrictedRoute
                  redirectTo="/goit-react-hw-08-phonebook/contacts"
                  component={<Registration />}
                />
              }
            />
            <Route
              path="/goit-react-hw-08-phonebook/login"
              element={
                <RestrictedRoute
                  redirectTo="/goit-react-hw-08-phonebook/contacts"
                  component={<Login />}
                />
              }
            />
            <Route
              path="/goit-react-hw-08-phonebook/contacts"
              element={
                <PrivateRoute
                  redirectTo="/goit-react-hw-08-phonebook/login"
                  component={<Contacts />}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
