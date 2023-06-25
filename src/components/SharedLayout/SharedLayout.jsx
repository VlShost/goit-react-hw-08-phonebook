import { AppBar, Container, LinearProgress, Toolbar } from '@mui/material';
import AuthNav from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import styles from 'components/styles';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <AppBar position="static" sx={styles.appBar}>
        <Container fixed>
          <Toolbar variant="dense" sx={styles.container}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Suspense fallback={<LinearProgress variant="indeterminate" />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
