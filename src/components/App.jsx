import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './SharedLayout/SharedLayout';
import { PrivateRoute } from './PrivateRoute';
import { userRefresh } from 'redux/auth/operations';
import { PublicRoute } from './PublicRoute';

const Home = lazy(() => import('../pages/Home'));
const LogIn = lazy(() => import('../pages/LogIn'));
const SignUp = lazy(() => import('../pages/SignUp'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<SignUp />} />
          }
        />
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/contacts" component={<LogIn />} />}
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};
