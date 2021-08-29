import React from 'react';
import PropTypes from 'prop-types';
import styles from './contactListItem.module.css';
const ContactListItem = ({ id, name, number, onDelete }) => (
  <li className={styles.contact}>
    <button
      type="button"
      onClick={() => onDelete(id)}
      className={styles.button}
    >
      X
    </button>
    <span className={styles.name}>{name}</span> <span>tel: {number}</span>
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default ContactListItem;
