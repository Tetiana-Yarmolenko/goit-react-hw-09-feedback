import { Component } from 'react';

import './App.css';

import Container from './Container/Container'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
    ],
    filter: '',
     name: '',
     phone: '',
  }

  handleAddContact = (newContact) => this.setState(({ contacts }) => ({
    contacts: [...contacts, newContact],
  })) 

  handleCheckUnique = (name) => {
    const { contacts } = this.state;
    const isExistContacts = !!contacts.find((contact) => contact.name === name)

    isExistContacts && alert('Contacts is already exist')

    return !isExistContacts
  }
  
  handleRemoveContact = (id) =>
    this.setState(({ contacts }) =>({ contacts: contacts.filter((contact) => contact.id !== id) }))
  
  handleFilterChange = (filter) => this.setState({filter})
  
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()) )
  }

  render() {
    const { contacts, filter } = this.state
    const visibleContacts = this.getVisibleContacts()
    return ( <Container>
      <h1 className='phonebook'>Phonebook</h1>
      <ContactForm contacts={contacts}  onAdd={this.handleAddContact} onCheckUnique={this.handleCheckUnique} />
      <h2 className='contacts'>Contacts</h2>
      < Filter filter ={filter} onChange={this.handleFilterChange} />
      <ContactList contacts ={visibleContacts} onRemove={this.handleRemoveContact} />
    </Container>)
  }
}

export default App;
