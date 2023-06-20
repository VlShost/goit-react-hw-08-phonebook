import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../../redux/operations';

export default function ContactForm() {
  const [contact, setContact] = useState({
    name: '',
    phone: '',
  });
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleInputChange = e => {
    setContact(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = nanoid(5);
    const queryMatch = contacts.find(
      ({ name }) =>
        contact.name && contact.name.toLowerCase() === name.toLowerCase()
    );

    if (queryMatch) {
      alert(`"${contact.name}" is already in contacts.`);
      return;
    } else {
      dispatch(addContact({ id, name: contact.name, phone: contact.phone }));
    }

    setContact({
      name: '',
      phone: '',
    });
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label className={css.contactLabel}>
        Name
        <input
          className={css.contactInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={contact.name}
          onChange={handleInputChange}
        />
      </label>
      <label className={css.contactLabel}>
        Phone
        <input
          className={css.contactInput}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={contact.phone}
          onChange={handleInputChange}
        />
      </label>
      <button className={css.contactBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
