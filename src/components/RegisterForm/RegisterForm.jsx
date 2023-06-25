import { useDispatch } from 'react-redux';
import {
  Avatar,
  Button,
  Box,
  CssBaseline,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Copyright, { defaultTheme } from 'components/LogInForm/LogInForm';
import { userRegister } from 'redux/auth/operations';
import styles from 'components/styles';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      userRegister({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box sx={styles.formWrapper}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            label="Name"
            name="name"
            type="text"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign up
          </Button>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
