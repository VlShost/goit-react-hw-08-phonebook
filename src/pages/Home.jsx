import { NavLink } from 'react-router-dom';
import { Box, Link, Typography } from '@mui/material';
import styles from 'components/styles';

export default function Home() {
  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h2" align="center" sx={styles.welcomeText}>
          Your personal phonebook
          <br /> welcomes you!
        </Typography>
        <Link
          component={NavLink}
          to="/contacts"
          variant="h5"
          underline="none"
          sx={styles.welcomeBtn}
        >
          Get started
        </Link>
      </Box>
    </>
  );
}
