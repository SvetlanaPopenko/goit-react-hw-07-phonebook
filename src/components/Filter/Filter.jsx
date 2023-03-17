import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';
import PropTypes from 'prop-types';
import { FilterText, FilterInput } from './Filter.styled';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChangeFilter = evt => {
    const value = evt.currentTarget.value.toLowerCase();
    dispatch(setStatusFilter(value));
  };

  return (
    <FilterText>
      Find contacts by name
      <FilterInput
        name="filter"
        id="filter"
        type="text"
        value={filter}
        onChange={onChangeFilter}
      />
    </FilterText>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;
