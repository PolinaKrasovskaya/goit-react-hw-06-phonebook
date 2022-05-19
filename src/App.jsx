import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <div>
        <p>Contacts</p>
        <Filter />
        <ContactList />        
      </div>
    </div>
  );  
}
