import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ListItem, ListItemText } from './ContactListItem.styled';
import { deleteContact } from 'redux/contactsSlice';

export const ContactListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <ListItemText>
        {name}: {number}
        <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
      </ListItemText>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
