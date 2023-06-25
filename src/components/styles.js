const styles = {
  welcomeText: {
    mt: 15,
    mb: 10,
  },
  welcomeBtn: {
    paddingY: 3,
    paddingX: 5,
    color: '#ffffff',
    backgroundColor: '#1976d2',
    fontSize: '25px',
    fontWeight: 700,
    textDecoration: 'none',
    border: 1,
    borderRadius: 5,
    '&:hover': {
      backgroundColor: '#ffffff',
      color: '#1976d2',
      border: 1,
    },
  },
  appBar: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  navBtn: {
    padding: 3,
    fontWeight: 700,
    textDecoration: 'none',
    color: '#ffffff',
  },
  loginBtn: {
    paddingY: 1,
    paddingX: 3,
    fontWeight: 700,
    textDecoration: 'none',
    color: '#ffffff',
    border: 1,
    borderColor: '#ffffff',
    borderRadius: 5,
  },
  signupBtn: {
    paddingY: 1,
    paddingX: 3,
    fontWeight: 700,
    mr: '1rem',
    textDecoration: 'none',
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  formWrapper: {
    maxWidth: '600px',
    mt: 10,
    mx: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  userText: {
    marginRight: '1rem',
  },
  logoutBtn: {
    color: 'primary',
    backgroundColor: '#ffffff',
    '&:hover': {
      backgroundColor: 'primary',
      color: '#ffffff',
      border: 1,
    },
  },
  contactsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    margin: '0 auto',
  },
  contactsTitle: {
    mt: 5,
    mb: 3,
    textAlign: 'center',
    fontWeight: 700,
  },
  filterWrapper: {
    maxWidth: '600px',
    mt: 10,
    mx: 'auto',
  },
  listWrapper: {
    maxWidth: '600px',
    mt: 3,
    mx: 'auto',
  },
};

export default styles;
