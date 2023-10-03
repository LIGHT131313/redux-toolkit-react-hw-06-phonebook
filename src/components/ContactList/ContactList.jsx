import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const getVisibleContactItems = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <>
      {getVisibleContactItems.length ? (
        <List>
          {getVisibleContactItems.map(contact => (
            <ContactListItem key={contact.id} contact={contact} />
          ))}
        </List>
      ) : (
        <p>No matches for your request</p>
      )}
    </>
  );
};
