import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import {
  selectIsLoading,
  selectVisibleContacts,
} from '../../redux/contacts/selectors';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemText,
  Button,
  CircularProgress,
} from '@mui/material';
import styles from 'components/styles';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <List sx={styles.listWrapper}>
        {isLoading && <CircularProgress />}
        {!isLoading &&
          contacts.map(({ id, name, number }) => (
            <ListItem key={id}>
              <ListItemText primary={`${name} : ${number}`} />
              <Button
                variant="contained"
                color="secondary"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </Button>
            </ListItem>
          ))}
      </List>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
