import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { ContainerForm, Title } from './App.styled.js';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = data => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts!`);
      return;
    }

    const newContact = {
      ...data,
      id: nanoid(),
    };
    this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }));
    // console.log(newContact);
    // console.log(this.state.contacts.name === newContact.name);
  };
  // очікуємо id контакта який хочемо видалити. хочемо змінити стан від попереднього. потрібно видалити об'єкт з масива.
  // беремо всі контакти, для кожного перевіряємо id, якщо contact.id не дорівняє id його повертають
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  onChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedName = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedName)
    );
  };

  render() {
    const filtredContacts = this.getFilteredContacts();
    // const filtredContacts = this.state.contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    // );
    return (
      <ContainerForm>
        <Title>Phonebook</Title>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={this.state.name} onChange={this.onChange} />
        {/* <ContactList contacts={this.state.contacts} /> */}
        <ContactList
          contacts={filtredContacts}
          onDeleteContact={this.deleteContact}
        />
      </ContainerForm>
    );
  }
}
