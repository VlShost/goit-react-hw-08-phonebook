import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Box, Button, Typography } from '@mui/material';
import styles from 'components/styles';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box display="flex" alignItems="center">
      <Typography variant="h6" sx={styles.userText}>
        Welcome, {user.name}!
      </Typography>
      <Button
        variant="outlined"
        type="button"
        onClick={() => dispatch(userLogOut())}
        sx={styles.logoutBtn}
      >
        Logout
      </Button>
    </Box>
  );
};
