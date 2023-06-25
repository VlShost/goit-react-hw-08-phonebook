import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';
import PropTypes from 'prop-types';
import { Box, TextField } from '@mui/material';
import styles from 'components/styles';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const handleInputChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box sx={styles.filterWrapper}>
      <TextField
        label="Find contacts by name"
        type="text"
        value={filterValue}
        onChange={handleInputChange}
        fullWidth
      />
    </Box>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
