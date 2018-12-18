import React from 'react';
import {Field, reduxForm} from 'redux-form'

export class ContactForm extends React.Component {
    onSubmit(values) {
        console.log(values)
    }
    
    render() {
    return (
        <form
            onSubmit={props.handleSubmit(values = this.onSubmit(values))}>
            <label htmlFor="name">Your Name</label>
            <Field type="text" id="name" name="name" component="input" />
            <label htmlFor="email">Email address</label>
            <Field type="email" id="email" name="email" component="input" />
            <label htmlFor="message">Message</label>
            <Field id="message" name="message" component="textarea" />
            <button type="submit">Submit</button>
        </form>
    );
    }
}

export default reduxForm({form: 'contact'})(ContactForm)
