import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteThisContact, getContacts, getFilter } from '../../redux/contactsSlice'
import ListItem from '../ListItem/ListItem';
import { ListContacts } from './ContactList.styles'
import propTypes from 'prop-types';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  )

  const deleteContact = contactId => {
    dispatch(deleteThisContact(contactId))
  };

  return (
    <ListContacts>
      {visibleContacts.map(({ name, id, number }) => (
        <ListItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={deleteContact}
          id={id}
        />
      ))}
    </ListContacts>
  );
};

ContactList.propTypes = {
  visibleContacts: propTypes.arrayOf(propTypes.object),
  deleteContact: propTypes.func,
};

export default ContactList;