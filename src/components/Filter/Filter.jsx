import PropTypes from 'prop-types';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={evt => {
          onChangeFilter(evt.target.value);
        }}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
