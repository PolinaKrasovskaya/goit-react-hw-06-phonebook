import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewContact, deleteThisContact, filterContacts, getContacts, getFilter } from './redux/contactsSlice'
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { nanoid } from 'nanoid';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(contacts)

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const nameToFind = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

    if(nameToFind) {
      alert(`${name} is already in contacts!`);
    } else {
      const newContact = {
        id: nanoid(),
        name,
        number
      };
      dispatch(addNewContact(newContact));
    };
  };

  const deleteContact = contactId => {
    dispatch(deleteThisContact(contactId))
  };

  const changeFilter = event => {
    dispatch(filterContacts(event.currentTarget.value))
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  )

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <div>
        <p>Contacts</p>
        <Filter
          value={filter}
          onChange={changeFilter}
        />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />        
      </div>
    </div>
  );  
}
