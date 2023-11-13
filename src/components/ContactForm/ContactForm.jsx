import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, FormButton, FormInput } from './ContactForm.styled';
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
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>Name</label>
        <FormInput
          id={this.nameId}
          type="text"
          name="name"
          required
          onChange={this.handleChange}
          value={this.state.name}
        />
        <label htmlFor={this.numberId}>Number</label>
        <FormInput
          id={this.numberId}
          type="tel"
          name="number"
          required
          onChange={this.handleChange}
          value={this.state.number}
        />
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    );
  }
}
