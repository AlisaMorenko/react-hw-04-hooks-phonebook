import React from 'react';
import PropTypes from 'prop-types';

import styles from './filter.module.css';

const Filter = ({ value, onFilter }) => {
  return (
    <label className={styles.label}>
      {' '}
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onFilter}
        className={styles.input}
      ></input>
    </label>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
export default Filter;
