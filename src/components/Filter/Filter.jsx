import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contactsSlice';
import {
  FilterLabel,
  FilterInput,
} from './Filter.styles';
import propTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(filterContacts(event.currentTarget.value))
  };

  return (
    <FilterLabel>
      Find contacts by name
        <FilterInput
          type="text"
          value={value}
          onChange={changeFilter}
        />
    </FilterLabel>
  )
}

Filter.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};

export default Filter;