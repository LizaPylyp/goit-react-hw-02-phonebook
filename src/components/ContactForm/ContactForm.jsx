import React, { Component } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';

import { nanoid} from 'nanoid';
import PropTypes from 'prop-types';


export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    nameInputId = nanoid();
    telInputId = nanoid();


    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value});
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit ({
            name: this.state.name,
            number: this.state.number,
        })
        this.resetForm();
    }

    resetForm = () => {
        this.setState ({
            name: '',
            number: '',
        })
    }

    render() {
        return (
            <Form onSubmit = {this.handleSubmit}>
                <Label htmlFor = {this.nameInput}>
                    Name
                    <Input 
                        type = 'text'
                        name = 'name'
                        value = {this.state.name}
                        onChange = {this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />    
                </Label>
                <Label htmlFor = {this.nameInput}>
                    Phone number
                    <Input 
                        type = 'tell'
                        name = 'number'
                        value = {this.state.number}
                        onChange = {this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />    
                </Label>
                <Button type = 'submit'>Add contact</Button>
            </Form>
        )
    }
} 

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}