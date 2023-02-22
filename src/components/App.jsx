import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { PrivateRoute } from '../routes/PrivateRoute';
import { RestrictedRoute } from '../routes/RestrictedRoute';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'Redux/operations';
import { useAuth } from '../hooks';

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
            <Route path="/" element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Registration />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
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
