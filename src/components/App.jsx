import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './Contacts/ContactList';
import { Container, Title, Header, Subtitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = obj => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          ...obj,
        },
      ],
    }));
  };

  handlChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    const { contacts, filter } = this.state;
    const visiblContacts = this.getVisibleContacts();
    return (
      <Container>
        <Header>
          Phone<Title>book</Title>
        </Header>
        <ContactForm addContact={this.addContact} contacts={contacts} />
        <Subtitle>Contacts</Subtitle>
        <Filter handlChangeFilter={this.handlChangeFilter} filter={filter} />
        <ContactList
          contacts={contacts.length}
          deleteContact={this.deleteContact}
          visiblContacts={visiblContacts}
        />
      </Container>
    );
  }
}
