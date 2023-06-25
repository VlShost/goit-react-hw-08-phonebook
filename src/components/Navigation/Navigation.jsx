import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import { Box, Link } from '@mui/material';
import styles from 'components/styles';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Box>
        <Link
          component={NavLink}
          to="/"
          variant="h6"
          underline="hover"
          color={'#ffc300'}
          sx={styles.navBtn}
        >
          HOME
        </Link>

        {isLoggedIn && (
          <Link
            component={NavLink}
            to="/contacts"
            variant="h6"
            underline="hover"
            sx={styles.navBtn}
          >
            CONTACTS
          </Link>
        )}
      </Box>
    </>
  );
};
