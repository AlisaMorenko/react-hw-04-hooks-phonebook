import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDelete={onDelete}
      />
    ))}
  </ul>
);
ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
export default ContactList;
