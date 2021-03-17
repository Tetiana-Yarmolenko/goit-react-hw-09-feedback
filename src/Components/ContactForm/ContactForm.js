import { Component } from 'react'
import { v4 as uuid } from 'uuid';

import s from "./ContactForm.module.css"

 const INIITAL_STATE = {
        name: '',
        phone: '',}
    
class ContactForm extends Component {
   
    state = INIITAL_STATE

    handleChangeForm = ({ target }) => {
        const { name, value } = target
        this.setState({ [name]: value })
    } 

    handleFormSubmit = (event) => {
        event.preventDefault()
        const { name, phone } = this.state;
        const { onAdd } = this.props;

        const isValidateForm = this.validateForm()
        if (!isValidateForm) return
        
        onAdd({ id: uuid(), name, phone })
        this.resetForm()
    }

    validateForm = () => {
        const { name, phone } = this.state;
        const { onCheckUnique } = this.props;
        if (!name || !phone) {
            alert('Some field is empty')
            return false
        }
        return onCheckUnique(name);
    }

    resetForm = () => this.setState(INIITAL_STATE)

    render() {
        const {name, phone} = this.state
        return (<form className={s.form} onSubmit={this.handleFormSubmit}>
            <label className={s.label}>
                Name
            <input
                    className={s.input}
                    text='text' name='name'
                    placeholder="Enter name"
                    value={name}
                    onChange={this.handleChangeForm} />
            </label>
            <label className={s.label}>
                Phone
            <input
                    className={s.input}
                    text='tel' name='phone'
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={this.handleChangeForm} />
                </label>
            <button className={s.button} type="submit">Add contact</button>
        </form>)
    }
}

export default  ContactForm