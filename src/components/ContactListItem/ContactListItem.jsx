import PropTypes from 'prop-types';
import { ListItem, ListItemText } from './ContactListItem.styled';

export const ContactListItem = ({
  contact: { id, name, number },
  onDelete,
}) => {
  return (
    <ListItem>
      <ListItemText>
        {name}: {number}
        <button onClick={() => onDelete(id)}>Delete</button>
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
  onDelete: PropTypes.func.isRequired,
};
