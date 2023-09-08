import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyles';
import { Layout } from './Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

const getIntialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');

  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return [
    // For test(works if LS is cleared)!!! =>
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // <= For test(works if LS is cleared)!!!
  ];
};

export const App = () => {
  const [contacts, setContacts] = useState(getIntialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts([...contacts, { id: nanoid(), ...newContact }]);
  };

  const filterContact = newFilter => setFilter(newFilter);

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const getVisibleContactItems = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <h2>Contacts</h2>
      {contacts.length ? (
        <>
          <Filter filter={filter} onChangeFilter={filterContact} />
          <ContactList
            contacts={getVisibleContactItems}
            onDelete={deleteContact}
          />
        </>
      ) : (
        <p>Contact list is empty</p>
      )}
      <GlobalStyle />
    </Layout>
  );
};
