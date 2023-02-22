import React from "react";


export class Form extends React.Component {
    state = {
        name: '',
        number: '',
    }

    handelChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value, })
    };


    handelSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state)
    this.reset();
  };

    reset = () => {
        this.setState({name: '', number: ''});
    };

    render() {
        return(
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
        <label>Number</label>
        <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={this.handelChange}
        value={this.state.number}
        />
        <button type="submit">add Contacts</button>
      </form>   
        );
    }
}