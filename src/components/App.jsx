import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyles';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>Contact list is empty</p>
      )}
      <GlobalStyle />
    </Layout>
  );
};
