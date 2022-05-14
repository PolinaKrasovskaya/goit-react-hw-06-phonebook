import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter'
import { nanoid } from 'nanoid'

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ]
    )
  });
  const [filter, setFilter] = useState('');

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
      setContacts( contacts => [newContact, ...contacts]);
    };
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId),
    );
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value)
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
        <Filter value={filter} onChange={changeFilter}
        />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />        
      </div>
    </div>
  );  
}




// import React, { Component } from 'react';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter'
// import { nanoid } from 'nanoid'
// import {
//   Wrapper,
//   Title,
// } from './App.styles';
// import { func } from 'prop-types';

// export default class App extends Component {
//   state = {
//     contacts: [
//       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//       {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//       {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//       {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ],
//     filter: '',
//   }

//   addContact = ({ name, number }) => {
//     const { contacts } = this.state;
//     const normalizedName = name.toLowerCase();
//     const nameToFind = contacts.find(contact => contact.name.toLowerCase() === normalizedName);

//     if(nameToFind) {
//       alert(`${name} is already in contacts!`);
//     } else {
//       const newContact = {
//         id: nanoid(),
//         name,
//         number
//       };
//       this.setState(({ contacts }) => ({
//           contacts: [newContact, ...contacts],
//         }));
//     };
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   changeFilter = (e) => {
//     this.setState({ filter: e.currentTarget.value })
//   }

//   render() {
//     const { filter } = this.state;

//     const normalizedFilter = this.state.filter.toLowerCase();
//     const visibleContacts = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//       )

//     return (
//       <Wrapper>
//         <Title>Phonebook</Title>
//         <ContactForm onSubmit={this.addContact} />
//         <div>
//           <Title>Contacts</Title>
//           <Filter value={filter} onChange={this.changeFilter}
//           />
//           <ContactList
//             contacts={visibleContacts}
//             onDeleteContact={this.deleteContact}
//           />        
//         </div>
//       </Wrapper>
//     );
//   }
// };




// записать в локал сторєдж
// useEffect(() => {
//   window.localStorage.setItem('contacts', JSON.stringify(contacts))
// }, [contacts])


// useEffect(() => {
//   console.log('zapusk useEffect');
// })