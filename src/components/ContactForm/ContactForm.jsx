import { useState } from 'react';
import {
  FormWrapper,
  InputLabel,
  FormInrut,
  SubmitButton,
} from './ContactForm.styles';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
        
      default:
        return;
    }
  }

  const onSubmitForm = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormWrapper onSubmit={onSubmitForm}>
      <InputLabel>Name</InputLabel>
      <FormInrut
        type="text"
        name="name"
        placeholder='Annie Copeland'
        value={name}
        onChange= {handleChange}

        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <InputLabel>Number</InputLabel>
      <FormInrut
        type="tel"
        name="number"
        placeholder='227-91-26'
        value={number}
        onChange= {handleChange}

        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <SubmitButton type="submit">Add contact</SubmitButton>
    </FormWrapper>
  )
}


// import React, { Component } from 'react';
// import { nanoid } from 'nanoid'
// import {
//   FormWrapper,
//   InputLabel,
//   FormInrut,
//   SubmitButton,
// } from './ContactForm.styles';

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: ''
//   }

//   nameInputId = nanoid();
//   numberInputId = nanoid();

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value })
//   }
  
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   }

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   }

//   render() {
//     return (
//       <FormWrapper onSubmit={this.handleSubmit}>
//           <InputLabel htmlFor={this.nameInputId}>Name</InputLabel>
//           <FormInrut
//             type="text"
//             name="name"
//             placeholder='Annie Copeland'
//             value={this.state.name}
//             onChange= {this.handleChange}
//             id={this.nameInputId}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//           <InputLabel htmlFor={this.numberInputId}>Number</InputLabel>
//           <FormInrut
//             type="tel"
//             name="number"
//             placeholder='227-91-26'
//             value={this.state.number}
//             onChange= {this.handleChange}
//             id={this.numberInputId}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//           <SubmitButton type="submit">Add contact</SubmitButton>
//         </FormWrapper>
//     )
//   }
// }

// export default ContactForm;