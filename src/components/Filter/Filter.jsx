import PropTypes from 'prop-types';
import { Label, Text, Input } from './Filter.styled';

export default function Filter({ filter, handlChangeFilter }) {
  return (
    <Label>
      <Text> Find contacts by name</Text>
      <Input
        type="text"
        name="filter"
        onChange={handlChangeFilter}
        value={filter}
      />
    </Label>
  );
}

Filter.propTypes = {
  handlChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
