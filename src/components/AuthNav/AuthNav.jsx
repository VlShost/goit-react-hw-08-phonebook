import { Box, Link } from '@mui/material';
import styles from 'components/styles';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <>
      <Box>
        <Link
          component={NavLink}
          to="/signup"
          variant="h5"
          underline="hover"
          sx={styles.signupBtn}
        >
          SIGN UP
        </Link>

        <Link
          component={NavLink}
          to="/login"
          variant="h5"
          underline="hover"
          sx={styles.loginBtn}
        >
          LOG IN
        </Link>
      </Box>
    </>
  );
}
