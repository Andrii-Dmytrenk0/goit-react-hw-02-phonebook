import React from "react";
// import { nanoid } from 'nanoid';


export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handelChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value, })
  };

  handelSubmit = event => {
    event.preventDefault();

    console.log(this.state)
  }

  render() {
  
    return (
      <form onSubmit={this.handelSubmit}>
        <label>Name</label>
        <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={this.handelChange}
        value={this.state.name}
        />
        <button type="submit">add Contacts</button>
        <h2>Contacts</h2>
        <ul>
          <li>{this.state.name}</li>
        </ul>
        {/* <label>Number</label>
        <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={this.handelChange}
        value={this.state.number}
        /> */}
      </form>
    )
  }
};
