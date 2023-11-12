import { Component } from 'react';
import { nanoid } from 'nanoid';
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    console.log(e.currentTarget.value);
    console.log(e.currentTarget.name);
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();

    // звернення до пропсів АРР (відправляємо дані форми в АРР функцію addContact)
    this.props.addContact({
      name: this.state.name,
      number: this.state.number,
    });
    this.reset();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>Name</label>
        <input
          id={this.nameId}
          type="text"
          name="name"
          required
          onChange={this.handleChange}
          value={this.state.name}
        />
        <label htmlFor={this.numberId}>Number</label>
        <input
          id={this.numberId}
          type="tel"
          name="number"
          required
          onChange={this.handleChange}
          value={this.state.number}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
