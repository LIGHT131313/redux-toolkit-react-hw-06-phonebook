import { Component } from 'react';
import { GlobalStyle } from './GlobalStyles';
import { Layout } from './Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      //For test(works if LS is cleared)!!!
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(pProps, pState) {
    if (pState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    const isExist = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(pState => ({
      contacts: [...pState.contacts, { id: nanoid(), ...newContact }],
    }));
  };

  deleteContact = contactId => {
    this.setState(pState => ({
      contacts: pState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContact = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  render() {
    const state = this.state;
    const getVisibleContactItems = state.contacts.filter(contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(state.filter.toLocaleLowerCase())
    );

    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        {state.contacts.length ? (
          <>
            <Filter filter={state.filter} onChangeFilter={this.filterContact} />
            <ContactList
              contacts={getVisibleContactItems}
              onDelete={this.deleteContact}
            />
          </>
        ) : (
          <p>Contact list is empty</p>
        )}
        <GlobalStyle />
      </Layout>
    );
  }
}
