import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import initialContacts from './contacts.json';
import shortid from 'shortid';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts,
  );
  const [filter, setFilter] = useState('');

  //create localStorage
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  //add contact
  const addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    //check added name
    const addedName = contact.name;
    const checkContactsName = contacts.find(
      contact => contact.name.toLowerCase() === addedName.toLowerCase(),
    );
    if (checkContactsName) {
      alert(`${addedName} is already in contacts!`);
      return;
    }
    setContacts(contacts => [contact, ...contacts]);
  };

  const delContacts = contactsId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactsId),
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onFilter={changeFilter} />
      <ContactList contacts={getVisibleContacts} onDelete={delContacts} />
    </>
  );
}
